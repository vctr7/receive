import React from 'react';
import { Route, Link } from 'react-router-dom';

import Navigator from '../components/Navigator'


class ItemDetail extends React.Component{
    constructor(props){
        super(props);
    }

    static defaultProps = {
        img_url: "https://image2.shilladfs.com/files/product/2016/05/04/084613000059_20160504_12400075_13_379150_20141015_183929_org_L32P.jpg",
        brand: "RECEIVE",
        name: "PARFUM",
        price: "0₩"
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
                        <h5>{this.props.brand}</h5>
                        <h3>{this.props.name}</h3>
                        
                        <div className="itemDetail_img">
                            <img src={this.props.img_url}
                            alt="item_image"
                            width={400} />
                        </div>
                        <br/>
                        <br/>
                        <h3>{this.props.price}</h3>
                        <br/>
                        <div className="itemDetail_discount_info">
                            <Link to="discount_info">
                                <h3>DISCOUNT INFO</h3>
                            </Link>
                        </div>

                        <div className="itemDetail_comparison">
                            <div>
                                <ul>
                                    <li>신라</li>
                                    <li>롯데</li>
                                    <li>신세계</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    };
};

export default ItemDetail;