import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, updateSHILLA, check } from '../../modules/user';
import MypageSHILLAForm from '../../components/MypageSHILLAForm';


const MypageSHILLA = ( { history } ) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user, duty } = useSelector(({ auth, user }) => ({
        authError: auth.authError,
        user: user,
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

        try {
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(user));
        } catch(e) {
            console.log('localStroage is not working..');
        }
        const userId = user.user.userId;
        const SHILLA_id = duty.SHILLA_id;
        const SHILLA_password = duty.SHILLA_password;

        // (Need to send the information to duty shopping web page)

        dispatch(updateSHILLA({ userId, SHILLA_id, SHILLA_password }));
        dispatch(check());
        dispatch(check());
    };


    useEffect(() => {
        if (!user.user) {
            alert('로그인 필요');
            history.push('/');
        }
    }, [history, user]);


    return(
        <MypageSHILLAForm 
                type='mypage'
                user={user}
                duty={duty} 
                onChange={onChange} 
                onSubmit={onSubmit} 
                error={error}
        />
    );
};

export default withRouter(MypageSHILLA);