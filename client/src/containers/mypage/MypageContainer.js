import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, update } from '../../modules/user';
import MypageForm from '../../components/MypageForm';
import { check } from '../../modules/user';

const MypageContainer = ( { history } ) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user, duty } = useSelector(({ auth, user }) => ({
        authError: auth.authError,
        user: user.user,
        duty: user.duty
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'duty',
                key: name,
                value,
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(duty);
        const { 
            SHILLA_id,
            SHILLA_password,
            LOTTE_id,
            LOTTE_password,
            SHINSEGAE_id,
            SHINSEGAE_password } = duty;
        dispatch(update({ 
            SHILLA_id,
            SHILLA_password,
            LOTTE_id,
            LOTTE_password,
            SHINSEGAE_id,
            SHINSEGAE_password }));
    };

    // useEffect(() => {
    //     dispatch(initializeForm('login'));
    // }, [dispatch]);

    // useEffect(() => {
    //     if (authError || !user) {
    //         console.log('오류 발생');
    //         console.log(authError);
    //         setError('로그인 필요');
    //         return;
    //     }
    //     if (auth) {
    //         console.log('로그인 성공');
    //         dispatch(check());
    //     }
    // }, [auth, authError, dispatch]);

    useEffect(() => {
        if (!user) {
            alert('로그인 필요');
            history.push('/');
            // try {
            //     localStorage.setItem('user', JSON.stringify(user));
            // } catch(e) {
            //     console.log('localStroage is not working..');
            // }
        }
    }, [history, user]);

    return(
        <MypageForm 
            type='mypage'
            duty={duty} 
            onChange={onChange} 
            onSubmit={onSubmit} 
            error={error}
        />
    );
};

export default withRouter(MypageContainer);