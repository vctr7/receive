import React from 'react';

class Navigator extends React.Component{
    render(){
        return(
            <div className="Navigator">
                <nav>
                    <ul>
                        <li className="nav_item"> 
                            <a href="">스킨케어</a>
                            <ul className="subMenu">
                                <li>기초케어</li>
                                <li>클렌징</li>
                                <li>남성케어</li>
                                <li>선케어</li>
                                <li>미용기기</li>
                            </ul>
                        </li>
                        <li className="nav_item"> 
                            <a href="">메이크업</a>
                            <ul className="subMenu">
                                <li>립</li>
                                <li>페이스</li>
                                <li>아이</li>
                                <li>세트/팔레트</li>
                                <li>메이크업도구/케이스</li>
                                <li>네일</li>
                            </ul>
                        </li>						
                        <li className="nav_item"> 
                            <a href="">향수</a>
                            <ul className="subMenu">
                                <li>여성향수</li>
                                <li>남성향수</li>
                                <li>니치향수</li>
                                <li>유니섹스향수</li>
                            </ul>
                        </li>
                        <li className="nav_item"> 
                            <a href="">가방/지갑</a>
                            <ul className="subMenu">
                                <li>여성가방</li>
                                <li>지갑</li>
                                <li>남성가방</li>
                                <li>여행용가방</li>
                                <li>유아동가방</li>
                            </ul>
                        </li>
                        <li className="nav_item"> 
                            <a href="">시계/주얼리</a>
                            <ul className="subMenu">
                                <li>시계</li>
                                <li>주얼리</li>
                                <li>남성주얼리</li>
                            </ul>
                        </li>
                        <li className="nav_item"> 
                            <a href="">패션/잡화</a>
                            <ul className="subMenu">
                                <li>여성패션</li>
                                    <li>패션잡화</li>
                                    <li>남성패션</li>
                                    <li>선글라스/안경</li>
                                    <li>스포츠/레저</li>
                                    <li>여행소품</li>
                                    <li>유아동패션</li>
                                    <li>만년필/다이어리</li>
                                </ul>
                        </li>
                        <li className="nav_item"> 
                            <a href="">스포츠/레저</a>
                            <ul className="subMenu">
                                <li>여성패션</li>
                                    <li>패션잡화</li>
                                    <li>남성패션</li>
                                    <li>선글라스/안경</li>
                                    <li>스포츠/레저</li>
                                    <li></li>
                                </ul>
                        </li>							
                        <li className="nav_item"> 
                            <a href="">디지털</a>
                            <ul className="subMenu">
                                <li>스마트기기/노트북</li>
                                <li>카메라/캠코더</li>
                                <li>소형가전</li>
                                <li>영상/음향가전</li>
                            </ul>
                        </li>
                        <li className="nav_item"> 
                            <a href="">유아</a>
                            <ul className="subMenu">
                                <li>기초케어</li>
                                <li>클렌징</li>
                                <li>남성케어</li>
                                <li>선케어</li>
                                <li>미용기기</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigator;