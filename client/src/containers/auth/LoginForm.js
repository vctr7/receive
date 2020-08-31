import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

const LoginForm = ( { history } ) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const { userId, password } = form;
        dispatch(login({ userId, password }));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('Error Occur');
            console.log(authError);
            setError('Login FAIL');
            return;
        }
        if (auth) {
            console.log('Login SUCCESS');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user.user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch(e) {
                console.log('localStroage is not working..');
            }
        }
    }, [history, user]);

    return(
        <AuthForm 
            type='login' 
            form={form} 
            onChange={onChange} 
            onSubmit={onSubmit} 
            error={error}
        />
    );
};

export default withRouter(LoginForm);