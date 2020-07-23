import React, { Component } from "react";
import Product from "./Product";
import LoadingProducts from "../loaders/Products";
import NoResults from "../empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class Products extends Component {
  constructor() {
    super();
  }

  productsCallback = (dataFromProduct) => {
    // 자식 컴포넌트에서 받은 값을 이용한 로직 처리
    this.props.callbackFromApp(dataFromProduct);
  }

  render() {
    let productsData;
    let term = this.props.searchTerm;
    let x;

    function searchingFor(term) {
      return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }
    productsData = this.props.productsList
      .filter(searchingFor(term))
      .map(product => {
        return (
          <Product
            callbackFromProducts={this.productsCallback}
            // key={product.id}
            // price={product.price}
            // name={product.name}
            // image={product.image}
            // id={product.id}
            key={product.prdNo}
            price={product.priceUSD}
            name={product.name}
            image={product.imgSrc}
            brand={product.brandEng}
            id={product.prdNo}

            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    // Empty and Loading States
    let view;
    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {productsData}
        </CSSTransitionGroup>
      );
    }
    return <div className="products-wrapper">{view}</div>;
  }
}

export default Products;
