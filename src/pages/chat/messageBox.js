import { useState, useEffect } from 'react';
import profImg from '../../assets/img/userMale.png';
import LastMessage from './lastmsg';

const MessageBox = ({socket, username})=>{
    const [message, setMessage] = useState([]);
    useEffect(()=>{
        socket.on("new_message", (data)=>{
            setMessage((state)=>[
                ...state,
                {
                    id: data.id,
                    message: data.message,
                    username: data.username,
                    time: data.time,
                }
            ])
        })
        return ()=> socket.off("new_message");
    },[socket]);

    // dd/mm/yyyy, hh:mm:ss
    function formatDateFromTimestamp(timestamp) {
        const date = new Date(timestamp);
        let time = date.getHours() + ":"+date.getMinutes()+":"+date.getSeconds();
        // return date.toLocaleString();
        return time;
    }

    return (
        <>
            <LastMessage message={message} socket={socket} setMessage={setMessage}/>
            {message.map((msg, i)=>(
                <li className={(msg.username===username)? "msgItem req": "msgItem res"} key={i}>
                    <div className="row">
                        <img src={profImg} alt="profil img"/>
                        <div className="msgBox column">
                            <div className="userName">
                                    {msg.username}
                                    <span style={{marginLeft: "10px", fontSize: "12px"}}>
                                        {formatDateFromTimestamp(msg.time)}
                                    </span>
                            </div>
                            <div className="msg">{msg.message} </div>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}
export default MessageBox;
