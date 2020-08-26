import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import MypageSHILLA from '../containers/mypage/MypageSHILLA';
import MypageLOTTE from '../containers/mypage/MypageLOTTE';
import MypageSHINSEGAE from '../containers/mypage/MypageSHINSEGAE';


class MyPage extends React.Component{
    render(){
        return(
            <AuthTemplate>
                <MypageSHILLA />
                <MypageLOTTE />
                <MypageSHINSEGAE />
            </AuthTemplate>
        );
    };
};

export default MyPage;