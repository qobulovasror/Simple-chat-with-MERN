import React from "react";
import '../assets/chat.css';
import profImg from '../assets/img/userMale.png';

const Chat = (props)=>{
    const logout = ()=>{
        alert("Siz haqiqatdan ham chiqmoqchimisiz ?");
        props.setChatTokin(true);
    }
    return(
        <>
            <div className="header">
                <div className="container">
                    <div className="row between">
                        <h1>Chat App</h1>
                        <button className="btn" onClick={logout}>Tizimdan chiqish</button>
                    </div>
                </div>
            </div>
            <ul className="chat-box">
                <li className="msgItem req">
                    <div className="row">
                        <div className="msgBox column">
                            <div className="userName">Asror</div>
                            <div className="msg">Salom </div>
                        </div>
                        <img src={profImg} alt="profil img"/>
                    </div>
                </li>
                <li className="msgItem res">
                    <div className="row">
                        <img src={profImg} alt="profil img"/>
                        <div className="msgBox column">
                            <div className="userName">Asror</div>
                            <div className="msg">Salom </div>
                        </div>
                    </div>
                </li>
            </ul>
            <form className="msgSender row">
                <input type="text" placeholder="Message" />
                <input className="btn" type="submit" value="Send"/>
            </form>
        </>
    )
}

export default Chat;