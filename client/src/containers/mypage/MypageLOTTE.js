import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, updateLOTTE, check } from '../../modules/user';
import MypageLOTTEForm from '../../components/MypageLOTTEForm';


const MypageLOTTE = ( { history } ) => {
    const [error] = useState(null);
    const dispatch = useDispatch();
    const { user, duty } = useSelector(({ user }) => ({
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
        const LOTTE_id = duty.LOTTE_id;
        const LOTTE_password = duty.LOTTE_password;

        // (Need to send the information to duty shopping web page)

        dispatch(updateLOTTE({ userId, LOTTE_id, LOTTE_password }));
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
        <MypageLOTTEForm 
                type='mypage'
                user={user}
                duty={duty}
                onChange={onChange} 
                onSubmit={onSubmit} 
                error={error}
        />
    );
};

export default withRouter(MypageLOTTE);