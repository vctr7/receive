import React from 'react';



class Login extends React.Component{
    render(){
        return(
            <div className="login_page">
                <h2>로그인 페이지</h2>
                <div className="login_module">
                    <div>
                        ID
                        <input className="id"></input>
                    </div>
                    
                    <div>
                        PW
                        <input className="password"></input>
                        <button>입력</button>
                    </div>
                    
                </div>
            </div>
        );
    };
};

export default Login;