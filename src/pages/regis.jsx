import React, {useState} from "react";
import axios from 'axios';
import '../assets/regis.css';
import { Link } from "react-router-dom";

const Regis = (props)=>{
    const [user, setUser] = useState({username: "", email: "", password:"", comfPassword: ""});
    const notif = (errMsg)=>{
        // toast.error(errMsg, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        alert(`xato: ${errMsg}`)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if(!/[a-zA-Z]{4,20}/g.test(user.username)){
            notif("username is invalid");
        }else{
            // eslint-disable-next-line no-useless-escape
            if(!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(user.email)){
                notif('Email is invalid')
            }else if(user.password.length < 4){
                notif('password must be longer than 4 characters')
            }else if(user.password !== user.comfPassword){
                notif("passwors and conform password is not equal")
            }
            else{
                axios.get('/api/auth/',{
                    username: user.username,
                    email: user.email,
                    password: user.password
                }).then(res=>{
                    console.log(res.data)
                    if(res.data){
                    props.setChatTokin(res.data);
                    props.setChatTokin(true);
                    }
                    // if(res.headers.token){
                    //   props.setChatTokin(res.headers.token);
                    // }
                    })
                .catch(err=>console.error(err));
            }
        }
    } 
    const inputHandler = (e)=>{
        const {name, value} = e.target;
        setUser({ ...user, [name]: value});
    }
    return(
        <>
            <div className="header">
                <div className="container">
                    <div className="row between">
                        <h1>Chat App</h1>
                    </div>
                </div>
            </div>
            <form onSubmit={submitHandler}>
                <h2>Registaration Page</h2>
                <label htmlFor="username">
                    <h3>Username</h3>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        id="username"
                        onChange={inputHandler}
                        />
                </label>
                <label htmlFor="email">
                    <h3>Email</h3>
                    <input 
                        type="email" 
                        placeholder="Email " 
                        name="email" 
                        id="email"
                        onChange={inputHandler}
                        />
                </label>
                <label htmlFor="password">
                    <h3>Password</h3>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        onChange={inputHandler}
                    />
                </label>
                <label htmlFor="comfPassword">
                    <h3>Conform Password</h3>
                    <input 
                        type="password" 
                        name="comfPassword" 
                        id="comfPassword" 
                        placeholder="Comform Password" 
                        onChange={inputHandler}
                    />
                </label>
                <input type="submit" value="Submit" className="btn" />
                <span className="linkAnhor"> Already have an account <Link to="/"> Login page</Link> </span>
            </form>
        </>
    )
}

export default Regis;