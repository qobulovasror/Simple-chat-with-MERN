import React from "react";
import '../assets/login.css';

const Login = ()=>{
    return(
        <>
            <div className="header">
                <div className="container">
                    <div className="row between">
                        <h1>Chat App</h1>
                        <button className="btn">Tizimdan chiqish</button>
                    </div>
                </div>
            </div>
            <form>
                
                <input type="text" placeholder="Email or Username" />
                <input type="password" placeholder="Password" />
            </form>
        </>
    )
}

export default Login;