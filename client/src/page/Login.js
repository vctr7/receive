import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

class Login extends React.Component{
    handleClick = () => {
        console.log("login");
    }

    render(){
        return(
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        );
    };
};

export default Login;