import React from 'react';

class Login extends React.Component{
    handleClick = () => {
        console.log("login");
    }

    render(){
        return(
            <div className="login_page">
                <h2>로그인</h2>
                <div className="login_module">
                    <div>
                        <input className="id" placeholder="아이디"></input>
                    </div>

                    <div>
                        <input className="password" placeholder="비밀번호"></input>
                    </div>

                    <br/>
                    <button className="login_button" onClick={this.handleClick}>로그인</button>
                </div>
            </div>
        );
    };
};

export default Login;