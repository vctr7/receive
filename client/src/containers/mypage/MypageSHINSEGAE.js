import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, updateSHINSEGAE, check } from '../../modules/user';
import MypageSHINSEGAEForm from '../../components/MypageSHINSEGAEForm';


const MypageSHINSEGAE = ( { history } ) => {
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
        const SHINSEGAE_id = duty.SHINSEGAE_id;
        const SHINSEGAE_password = duty.SHINSEGAE_password;

        dispatch(updateSHINSEGAE({ userId, SHINSEGAE_id, SHINSEGAE_password }));

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
        <MypageSHINSEGAEForm 
                type='mypage'
                duty={duty} 
                onChange={onChange} 
                onSubmit={onSubmit} 
                error={error}
        />
    );
};

export default withRouter(MypageSHINSEGAE);