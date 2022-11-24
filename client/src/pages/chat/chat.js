import React, { useState } from "react";
import io from 'socket.io-client';
import MessageBox from "./messageBox";
import Alert from "./alert";
import MessageInput from "./messageInput";
import '../../assets/chat.css';

const socket = io.connect('http://localhost:5000');

const Chat = ({setChatTokin, username})=>{
    const [style, setStyle] = useState({top: '-200px'});
    const logout = ()=>{
        setStyle({top: '20px'});
    }
    const alertHandler = (param)=>{
        if(param){
            setChatTokin("");
            window.localStorage.removeItem('chatToken');
        }
        setStyle({top: '-200px'});
    }
    return(
        <>
            {/* alert window */}
            <Alert 
                active={style}
                alertHandler={alertHandler}
            />

            <div className="header">
                <div className="container">
                    <div className="row between">
                        <h1>Chat App</h1>
                        <button className="btn" onClick={logout}>Tizimdan chiqish</button>
                    </div>
                </div>
            </div>
            
            {/* chat message box */}
            <ul className="chat-box">
                <MessageBox username={username} socket={socket}/>
            </ul>

            {/* chat message input */}
            <MessageInput username={username} socket={socket}/>
        </>
    )
}

export default Chat;