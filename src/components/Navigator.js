import React from 'react';

class Navigator extends React.Component{
    render(){
        return(
            <div className="Navigator">
                <nav>
                    <ul>
                        <li className="nav_item"> 
                            <a href="">스킨케어</a>
                        </li>
                        <li className="nav_item"> 
                            <a href="">메이크업</a>
                        </li>						
                        <li className="nav_item"> 
                            <a href="">향수</a>
                        </li>
                        <li className="nav_item"> 
                            <a href="">가방/지갑</a>
                        </li>
                        <li className="nav_item"> 
                            <a href="">시계/주얼리</a>
                        </li>
                        <li className="nav_item"> 
                            <a href="">패션/잡화</a>
                        </li>
                        <li className="nav_item"> 
                            <a href="">스포츠/레저</a>
                        </li>							
                        <li className="nav_item"> 
                            <a href="">디지털</a>
                        </li>
                        <li className="nav_item"> 
                            <a href="">유아</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigator;