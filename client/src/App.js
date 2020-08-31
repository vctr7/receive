import React, { Component } from "react";
import {Route} from 'react-router-dom';

import HeaderContainer from "./containers/common/HeaderContainer";
import Advertisement from "./components/Advertisement"
import Navigator from "./components/Navigator"
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";

//route to other pages
import ItemDetail from "./page/ItemDetail";
import DiscountInfo from "./page/DiscountInfo";
import Login from "./page/Login";
import MyPage from "./page/MyPage";
import Register from "./page/Register";

import 'react-slideshow-image/dist/styles.css'
import "./scss/style.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: "",
      term: "",
      category: "",
      quickViewProduct: {},
      modalActive: false,
      p_imgurl: "https://danielledeepsea.files.wordpress.com/2018/03/false-2061132_960_720.png",
      p_brand: "None",
      p_name: "None",
      p_price: "--$"
    };
   
    this.checkProduct = this.checkProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  callApi = async() => {
    const response = await fetch("/item/parfum");
    const body = await response.json();
    this.setState({
      products: body
    })
  }

  componentDidMount() {
    this.callApi();
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
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
        <HeaderContainer/>
        <div>
          <Route path="/" exact>
            <div className="mainpage_nav">
              <Navigator />
            </div>
            <Advertisement className="AD"/>
            <hr/>
                <h3>Itemlist</h3>
                {this.state.products ? <Products
                callbackFromApp={this.appCallback}
                productsList={this.state.products}
                searchTerm={this.state.term}
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
          <Route path="/register" component={Register}/>
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