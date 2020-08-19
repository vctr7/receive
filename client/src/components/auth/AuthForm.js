import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';


const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover{
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="userId" 
                    name="userId" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={form.userId}
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password" 
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <div>
                        <StyledInput 
                            autoComplete="new-password" 
                            name="passwordConfirm" 
                            placeholder="비밀번호 확인" 
                            type="password" 
                            onChange={onChange}
                            value={form.passwordConfirm}
                        />
                        <StyledInput 
                            autoComplete="username" 
                            name="username" 
                            placeholder="이름" 
                            type="username" 
                            onChange={onChange}
                            value={form.username}
                        />
                        <StyledInput 
                            autoComplete="emailAddress" 
                            name="emailAddress" 
                            placeholder="이메일" 
                            type="emailAddress" 
                            onChange={onChange}
                            value={form.emailAddress}
                        />
                        <StyledInput 
                            autoComplete="birthday" 
                            name="birthday" 
                            placeholder="생년월일" 
                            type="birthday" 
                            onChange={onChange}
                            value={form.birthday}
                        />
                        <StyledInput 
                            autoComplete="homeAddress" 
                            name="homeAddress" 
                            placeholder="주소" 
                            type="homeAddress" 
                            onChange={onChange}
                            value={form.homeAddress}
                        />
                        <StyledInput 
                            autoComplete="phoneNumber" 
                            name="phoneNumber" 
                            placeholder="전화번호" 
                            type="phoneNumber" 
                            onChange={onChange}
                            value={form.phoneNumber}
                        />
                        <StyledInput 
                            autoComplete="cellphoneNumber" 
                            name="cellphoneNumber" 
                            placeholder="핸드폰 번호" 
                            type="cellphoneNumber" 
                            onChange={onChange}
                            value={form.cellphoneNumber}
                        />
                     </div>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan={true} fullWidth={true} >
                    {text}
                </ButtonWithMarginTop>
            </form>

            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;