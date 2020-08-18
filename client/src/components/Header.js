import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartScrollBar from "./CartScrollBar";
import Counter from "./Counter";
import EmptyCart from "../empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";
import Responsive from './common/Responsive';
import Button from './common/Button';
import styled from "styled-components";


const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  bow-shadow: 0px 2px 4px rgba(0, 0 , 0, 0,08);
`;

const Wrapper = styled(Responsive)`
  heigh: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    font-size: 1.125rem;
    fonst-weight: 800;
    letter-spacing: 2px;
  }
  .right{
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;


const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;


const Header = ({ user }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showCart: false,
  //     cart: this.props.cartItems,
  //     mobileSearch: false
  //   };
  // };
  // handleCart(e) {
  //   e.preventDefault();
  //   this.setState({
  //     showCart: !this.state.showCart
  //   });
  // };
  // handleSubmit(e) {
  //   e.preventDefault();
  // }
  // handleMobileSearch(e) {
  //   e.preventDefault();
  //   this.setState({
  //     mobileSearch: true
  //   });
  // }
  // handleSearchNav(e) {
  //   e.preventDefault();
  //   this.setState(
  //     {
  //       mobileSearch: false
  //     },
  //     function() {
  //       this.refs.searchBox.value = "";
  //       this.props.handleMobileSearch();
  //     }
  //   );
  // }
  // handleClickOutside(event) {
  //   const cartNode = findDOMNode(this.refs.cartPreview);
  //   const buttonNode = findDOMNode(this.refs.cartButton);
  //   if (cartNode.classList.contains("active")) {
  //     if (!cartNode || !cartNode.contains(event.target)) {
  //       this.setState({
  //         showCart: false
  //       });
  //       event.stopPropagation();
  //     }
  //   }
  // }
  // componentDidMount() {
  //   document.addEventListener(
  //     "click",
  //     this.handleClickOutside.bind(this),
  //     true
  //   );
  // }
  // componentWillUnmount() {
  //   document.removeEventListener(
  //     "click",
  //     this.handleClickOutside.bind(this),
  //     true
  //   );
  // }
  // render() {
  //   let cartItems;
  //   cartItems = this.state.cart.map(product => {
  //     return (
  //       <li className="cart-item" key={product.name}>
  //         <img className="product-image" src={product.image} />
  //         <div className="product-info">
  //           <p className="product-name">{product.name}</p>
  //           <p className="product-price">{product.price}</p>
  //         </div>
  //         <div className="product-total">
  //           <p className="quantity">
  //             {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
  //           </p>
  //           <p className="amount">{product.quantity * product.price}</p>
  //         </div>
  //         <a
  //           className="product-remove"
  //           href="#"
  //           onClick={this.props.removeProduct.bind(this, product.id)}
  //         >
  //           ×
  //         </a>
  //       </li>
  //     );
  //   });
  //   let view;
  //   if (cartItems.length <= 0) {
  //     view = <EmptyCart />;
  //   } else {
  //     view = (
  //       <CSSTransitionGroup
  //         transitionName="fadeIn"
  //         transitionEnterTimeout={500}
  //         transitionLeaveTimeout={300}
  //         component="ul"
  //         className="cart-items"
  //       >
  //         {cartItems}
  //       </CSSTransitionGroup>
  //     );
  //   }
    return (
      <div>
        <HeaderBlock>
          <Wrapper>
            <Link to="/" className='logo'>
              SPREE
            </Link>

            {user ? (
              <div className='right'>
                <UserInfo>{user.username}</UserInfo>
                <Button>로그아웃</Button>
                <Button to="/register">회원가입</Button>
                <Button to="/mypage">MyPage</Button>
              </div>
            ) : (
              <div className='right'>
                <Button to="/login">로그인</Button>
                <Button to="/register">회원가입</Button>
                <Button to="/mypage">MyPage</Button>
            </div>
            )}
            
          </Wrapper>

        </HeaderBlock>
        <Spacer/>
      </div>


      // <header>
      //   <div className="container">
      //     <div className="brand">
      //       <Link to="/">
      //         <h1>
      //         RECEIVE
      //         </h1>
      //       </Link>
      //     </div>

      //     <div className="search">
      //       <a
      //         className="mobile-search"
      //         href="#"
      //         onClick={this.handleMobileSearch.bind(this)}
      //       >
      //         <img
      //           src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
      //           alt="search"
      //         />
      //       </a>
      //       <form
      //         action="#"
      //         method="get"
      //         className={
      //           this.state.mobileSearch ? "search-form active" : "search-form"
      //         }
      //       >
      //         <a
      //           className="back-button"
      //           href="#"
      //           onClick={this.handleSearchNav.bind(this)}
      //         >
      //           <img
      //             src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
      //             alt="back"
      //           />
      //         </a>
      //         <input
      //           type="search"
      //           ref="searchBox"
      //           placeholder="상품명을 입력하세요."
      //           className="search-keyword"
      //           onChange={this.props.handleSearch}
      //         />
      //         <button
      //           className="search-button"
      //           type="submit"
      //           onClick={this.handleSubmit.bind(this)}
      //         />
      //       </form>
      //     </div>

      //     <div className="cart">
      //       <div className="cart-info">
      //         <table>
      //           <tbody>
      //             <tr>
      //               <td>No. of items</td>
      //               <td>:</td>
      //               <td>
      //                 <strong>{this.props.totalItems}</strong>
      //               </td>
      //             </tr>
      //             <tr>
      //               <td>Sub Total</td>
      //               <td>:</td>
      //               <td>
      //                 <strong>{this.props.total}</strong>
      //               </td>
      //             </tr>
      //           </tbody>
      //         </table>
      //       </div>
      //       <a
      //         className="cart-icon"
      //         href="#"
      //         onClick={this.handleCart.bind(this)}
      //         ref="cartButton"
      //       >
      //         <img
      //           className={this.props.cartBounce ? "tada" : " "}
      //           src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
      //           alt="Cart"
      //         />
      //         {this.props.totalItems ? (
      //           <span className="cart-count">{this.props.totalItems}</span>
      //         ) : (
      //           ""
      //         )}
      //       </a>
      //       <div
      //         className={
      //           this.state.showCart ? "cart-preview active" : "cart-preview"
      //         }
      //         ref="cartPreview"
      //       >
      //         <CartScrollBar>{view}</CartScrollBar>
      //         <div className="action-block">
      //           <button
      //             type="button"
      //             className={this.state.cart.length > 0 ? " " : "disabled"}
      //           >
      //             PROCEED TO CHECKOUT
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="Header_function">
      //       <div className="Login">
      //         <Link to="login">로그인</Link>
      //       </div>

      //       <div className="SignIn">
      //         <Link to="register">회원가입</Link>
      //       </div>

      //       <div className="MyPage">
      //         <Link to="mypage">마이페이지</Link>
      //       </div>
      //     </div>
      //   </div>
      // </header>
    );
};


export default Header;
