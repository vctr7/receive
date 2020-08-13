import React from 'react';
import Button from '../components/common/Button';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

class Register extends React.Component{
    handleClick = () => {
        console.log("register");
    }

    render(){
        return(
            <AuthTemplate>
                <AuthForm type="register" />
            </AuthTemplate>
        );
    };
};

export default Register;