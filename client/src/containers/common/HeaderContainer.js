import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

const HeadeerContainer = () => {
    const { user } = useSelector(({user}) => ({user: user.user}));
    return <Header user={user} />

};

export default HeadeerContainer;