import React, { Component } from "react";
import {Route, Link} from 'react-router-dom';
import App from '../App';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
    };
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
          
        </div>
      </div>
    );
  }
}

export default Product;
