// import React from 'react';


// class MyPage extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>My Page</h2>

//             </div>
//         );
//     };
// };

// export default MyPage;


import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import MypageContainer from '../containers/mypage/MypageContainer';

class MyPage extends React.Component{

    render(){
        return(
            <AuthTemplate>
                <MypageContainer />
            </AuthTemplate>
        );
    };
};

export default MyPage;