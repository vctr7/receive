import React from 'react'

class DiscountInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info1: 0,
            info2: 0,
            info3: 0
        };
    };
    render(){
        return(
            <div>
                <div>
                    <h1>DISCOUNT INFO</h1>
                </div>

                <div>
                    <h3>1</h3>
                    <h3>2</h3>
                    <h3>3</h3>
                </div>

            </div>

        );
    };
};

export default DiscountInfo;