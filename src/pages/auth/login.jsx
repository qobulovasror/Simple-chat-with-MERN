import React, {useState} from "react";
import axios from 'axios';
// import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/login.css';

const Login = ({setChatTokin, setUserName})=>{
    const [user, setUser] = useState({username: "", password:""});
    const notif = (errMsg)=>{
        toast.error(errMsg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        // eslint-disable-next-line no-useless-escape
        if(!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(user.username) ){
            if(!/[a-zA-Z]{4,20}/g.test(user.username)){
                notif('Username or Email is invalid');
            }else{
                if(user.password.length < 4){
                    notif('password must be longer than 4 characters')
                }else{
                    httpRequest()
                //     setChatTokin(true);
                // setUserName(user.username);
                }
            }
        }else if(user.password.length < 4){
            notif('password must be longer than 4 characters')
        }else{
            httpRequest()
            // setChatTokin("res.headers.authToken");
            // setUserName(user.username);
        }
    } 
    const httpRequest = ()=>{
        const name = user.username;
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: {name: name,password: user.password },
            url: "/api/auth/"
          };
     
          axios(options)
          .then(res=>{
                console.log(res.data)
                if(res.headers.authToken){
                    console.log(res.headers.authToken, res.data)
                    window.localStorage.setItem("chatToken", res.headers.authToken)
                    setChatTokin(res.headers.authToken);
                    setUserName(user.username);
                }
            })
            .catch(err=>{
                    notif(err.response.data);
                    console.log(err)
                });
        // axios.get('/api/auth/', {
        //     name: user.username,
        //     password: user.password
        // }).then(res=>{
        //     console.log(res.data)
        //     if(res.headers.authToken){
        //         console.log(res.headers.authToken, res.data)
        //         window.localStorage.setItem("chatToken", res.headers.authToken)
        //         setChatTokin(res.headers.authToken);
        //         setUserName(user.username);
        //     }
        // })
        // .catch(err=>{
        //         notif(err.response.data);
        //     });
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
                <h2>Login Page</h2>
                <label htmlFor="username">
                    <h3>Username or email</h3>
                    <input 
                        type="text" 
                        placeholder="Email or Username" 
                        name="username" 
                        id="username"
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
                <input type="submit" value="Submit" className="btn" />
                <span className="linkAnhor"> I am not registered<Link to="/register"> Sign up</Link> </span>
            </form>
            <ToastContainer />
        </>
    )
}

export default Login;


// import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'http://localhost:5000/api/regis',
//   data: {name: 'Asror', email: 'qobulovasror0@gmail.com', password: 'Asror1234'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });