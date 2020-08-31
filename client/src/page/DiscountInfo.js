import React from 'react'
import Navigator from '../components/Navigator'


class DiscountInfo extends React.Component{
    constructor(props){
        super(props);
    };

    static defaultProps = {
        info1: 1,
        info2: 2,
        info3: 3
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
                <div className="discount_info">
                    <div className="info_box">
                        <div>
                            <h1>DISCOUNT INFO</h1>
                        </div>

                        <div>
                            <h3>{this.props.info1}</h3>
                            <h3>{this.props.info2}</h3>
                            <h3>{this.props.info3}</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        );
    };
};

export default DiscountInfo;