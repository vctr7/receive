import React from 'react';
import { Route, Link } from 'react-router-dom';


class ItemDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img_url: "",
            brand: "",
            item: "",
            price: 0
        }
    }
    render(){
        return(

            <div className="itemDetail">
                
                <div className="itemDetail_item_info">
                    <h2>ITEM Info</h2>
                    <br/>
                    <br/>
                    <h5>BRAND NAME</h5>
                    <h3>ITEM NAME</h3>
                    
                    <div className="itemDetail_img">
                        <img src="https://image2.shilladfs.com/files/product/2016/05/04/084613000059_20160504_12400075_13_379150_20141015_183929_org_L32P.jpg" alt="item image"
                        width={400} />
                    </div>
                    <h3>PRICE: 50,000₩   </h3>
                </div>
                
                <div className="itemDetail_discount_info">
                    <br/>
                    <Link to="discount_info">
                        <h3>DISCOUNT INFO</h3>
                    </Link>
                </div>
            </div>
        );
    };
};

export default ItemDetail;