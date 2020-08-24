import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

class Register extends React.Component{

    render(){
        return(
            <AuthTemplate>
                <RegisterForm />
            </AuthTemplate>
        );
    };
};

export default Register;