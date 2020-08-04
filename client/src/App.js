import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Route, Link} from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement"
import Navigator from "./components/Navigator"
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import ItemDetail from "./page/ItemDetail";
import DiscountInfo from "./page/DiscountInfo";
import Login from "./page/Login";
import MyPage from "./page/MyPage";
import SignIn from "./page/SignIn";

import 'react-slideshow-image/dist/styles.css'
import "./scss/style.scss";
import { data } from "autoprefixer";



class App extends Component {
  constructor() {
    super();
    this.state = {
      products: "",
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
      p_imgurl: "https://danielledeepsea.files.wordpress.com/2018/03/false-2061132_960_720.png",
      p_brand: "None",
      p_name: "None",
      p_price: "--$"
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  // getProducts() {
  //   let url = "http://localhost:8795/api/parfum";
  //     // "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
  //   axios.get(url).then(response => {
  //     this.setState({
  //       products: response.data
  //     });
  //   });
    // this.setState({
    //   products: parfum
    // });
  // }

  callApi = async() => {
    const response = await fetch("/item/parfum");
    const body = await response.json();
    this.setState({
      products: body
    })
  }

  componentDidMount() {
    // this.getProducts();
    this.callApi();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }
  appCallback = (dataFromProducts) => {
    this.setState({
      p_imgurl: dataFromProducts["image"],
      p_brand: dataFromProducts["brand"],
      p_name: dataFromProducts["name"],
      p_price: dataFromProducts["price"]
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
        <div>
          <Route path="/" exact>
            <div className="mainpage_nav">
              <Navigator />
            </div>
            <Advertisement className="AD"/>
            <hr/>
                <h3>Hot</h3>
                {this.state.products ? <Products
                callbackFromApp={this.appCallback}
                productsList={this.state.products}
                searchTerm={this.state.term}
                addToCart={this.handleAddToCart}
                productQuantity={this.state.quantity}
                updateQuantity={this.updateQuantity}
                openModal={this.openModal}/> : "Loading..."}

          </Route>
          <Route path='/itemdetail'>
            <ItemDetail
            img_url={this.state.p_imgurl}
            brand={this.state.p_brand}
            name={this.state.p_name}
            price={this.state.p_price}
            />
          </Route>
          <Route path="/discount_info" component={DiscountInfo}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/login" component={Login}/>
          <Route path="/mypage" component={MyPage}/>
        </div>
        
        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  };
};

export default App;