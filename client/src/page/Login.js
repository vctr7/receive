import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

class Login extends React.Component{

    render(){
        return(
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        );
    };
};

export default Login;