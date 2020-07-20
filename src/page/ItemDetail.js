import React from 'react';
import { Route, Link } from 'react-router-dom';

import Navigator from '../components/Navigator'


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
            <div>
                <div className="itemDetail_category">
                    <div className="category_upper">
                        <h3><a href="" className="name">카테고리</a></h3>
                        
                        <div className="category_">
                            <Navigator className="navig"/>
                        </div>
                    </div>
                </div>
                <div className="itemDetail">
                    <div className="itemDetail_item_info">
                        {/* <h2>ITEM Info</h2> */}
                        {/* <br/> */}
                        <br/>
                        <h5>BRAND NAME</h5>
                        <h3>ITEM NAME</h3>
                        
                        <div className="itemDetail_img">
                            <img src="https://image2.shilladfs.com/files/product/2016/05/04/084613000059_20160504_12400075_13_379150_20141015_183929_org_L32P.jpg" 
                            alt="item_image"
                            width={400} />
                        </div>
                        <br/>
                        <br/>
                        <h3> PRICE: 50,000₩   </h3>
                        <br/>
                        <div className="itemDetail_discount_info">
                            <Link to="discount_info">
                                <h3>DISCOUNT INFO</h3>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    };
};

export default ItemDetail;