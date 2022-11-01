import {useState} from 'react';

const MessageInput = ({ socket, username}) => {
  const [message, setMessage] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    if(message!==''){
      let time = Date.now();
      socket.emit("send_message", {username, message, time});
      setMessage('');
    }
  }
  
  return (
    <form className="msgSender row" onSubmit={submitHandler}>
      <input 
        type="text" 
        placeholder="Message"
        onChange={(e)=>setMessage(e.target.value)}
        value={message}
      />
      <input 
        className="btn" 
        type="submit" 
        value="Send" 
      />
    </form>
  );
};
export default MessageInput;
