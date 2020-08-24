import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from './../lib/styles/palette';
import Button from './common/Button'


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

const MypageForm = ({type, duty, onChange, onSubmit, error}) => {
    // const text = textMap[type];
    return(
        <AuthFormBlock>
            <h3>MYPAGE</h3>
            <hr></hr>
            <h4>신라</h4>
            {/* { !duty.SHILLA_id && !duty.SHILLA_passsword ? 
            ( 
            <form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="SHILLA_id"
                    name="SHILLA_id" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={duty.SHILLA_id}
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="SHILLA_password" 
                    placeholder="비밀번호" 
                    type="password" 
                    onChange={onChange}
                    value={duty.SHILLA_password}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan={true} fullWidth={true} >
                    로그인
                </ButtonWithMarginTop>
            </form>
            ) : (`success`)} */}
            <form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="SHILLA_id"
                    name="SHILLA_id" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={duty.SHILLA_id}
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="SHILLA_password" 
                    placeholder="비밀번호" 
                    type="password" 
                    onChange={onChange}
                    value={duty.SHILLA_password}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan={true} fullWidth={true} >
                    로그인
                </ButtonWithMarginTop>
            </form>

            <h4>롯데</h4>
            { !duty.LOTTE_id && !duty.LOTTE_passsword ? (<form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="LOTTE_id" 
                    name="LOTTE_id" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={duty.LOTTE_id}
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="LOTTE_password" 
                    placeholder="비밀번호" 
                    type="password" 
                    onChange={onChange}
                    value={duty.LOTTE_password}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan={true} fullWidth={true} >
                    로그인
                </ButtonWithMarginTop>
            </form>) : (`success`)}
            

            <h4>신세계</h4>
            { !duty.SHINSEGAE_id && !duty.SHINSEGAE_passsword ? (<form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="SHINSEGAE_id" 
                    name="SHINSEGAE_id" 
                    placeholder="아이디" 
                    onChange={onChange}
                    value={duty.SHINSEGAE_id}
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="SHINSEGAE_password"
                    placeholder="비밀번호" 
                    type="password" 
                    onChange={onChange}
                    value={duty.SHINSEGAE_password}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan={true} fullWidth={true} >
                    로그인
                </ButtonWithMarginTop>
            </form>) : (`success`)}

        </AuthFormBlock>
    );
};

export default MypageForm;