import React, { Component } from "react";
import Counter from "./Counter";
import {Route, Link} from 'react-router-dom';
import App from '../App';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
      isAdded: false
    };
  }
  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }
  quickView(image, name, price, id) {
    this.setState(
      {
        quickViewProduct: {
          image: image,
          name: name,
          price: price,
          id: id
        }
      },
      function() {
        this.props.openModal(this.state.quickViewProduct);
      }
    );
  }
  returnApp = (image, brand, name, price) => {
    // console.log("implement returnApp");
    this.props.callbackFromProducts({image, brand, name, price});
  }
  render() {
    let image = this.props.image;
    let brand = this.props.brand;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    return (
      <div>
        <div className="product">
          <div className="product-image">
            <img
                src={image} alt={this.props.name} onClick={this.quickView.bind(
                  this,
                  image,
                  name,
                  price,
                  id,
                  quantity
                )}
            />
          </div>

          <Link to='/itemdetail'>
            <h4 className="product-name" onClick={this.returnApp.bind(this, image, brand, name, price)}>{this.props.name}</h4>
          </Link>

          <p className="product-price">{this.props.price}</p>
          
          {/* <Counter
            productQuantity={quantity}
            updateQuantity={this.props.updateQuantity}
            resetQuantity={this.resetQuantity}
          /> */}
          {/* <Route path='/itemdetail' component={ItemDetail}/> */}
          {/* <div className="product-action">
              <button
                className={!this.state.isAdded ? "" : "added"}
                type="button"
                onClick={this.addToCart.bind(
                  this,
                  image,
                  name,
                  price,
                  id,
                  quantity
                )}>
                {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
              </button>
          </div> */}
        </div>
        
      </div>
    );
  }
}

export default Product;
