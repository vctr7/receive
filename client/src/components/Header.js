import React from "react";
import { Link } from "react-router-dom";
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


const Header = ({ user, onLogout }) => {
    return (
      <div>
        <HeaderBlock>
          <Wrapper>
            <Link to="/" className='logo'>
              SPREE
            </Link>

            {user ? (
              <div className='right'>
                <UserInfo>{user.userId}님</UserInfo>
                <Button onClick={onLogout}>로그아웃</Button>
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
    );
};


export default Header;
