import React from 'react';
import { Route, Link } from 'react-router-dom';


class ItemDetail extends React.Component{
    render(){
        return(

            <div className="itemDetail">
                <div className="itemDetail_item_info">
                    <h2>ITEM Info</h2>
                    <br/>
                    <div className="itemDetail_img">
                        <h3>Image</h3>
                    </div>
                    <br/>
                    <h5>BRAND NAME</h5>
                    <h3>ITEM NAME</h3>
                    <h3>PRICE</h3>
                </div>
                <div className="itemDetail_discount_info">
                    <Link to="discount_info">
                        <h3>DISCOUNT INFO</h3>
                    </Link>
                </div>
            </div>
        );
    };
};

export default ItemDetail;