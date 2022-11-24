import React, {useState, useEffect} from 'react';

const LastMessage = ({setMessage, message, socket})=>{

	const [isLastMsg, setIsLastMsg] = useState(true);

	const lastMsg = ()=>{
        socket.emit("lastFiftyMsg", "50");
    }
    
    useEffect(()=>{
        socket.on("lastMsg", (data)=>{
            setMessage(data);
			setIsLastMsg(false);
        })
        return ()=> socket.off("lastMsg");
    },[setMessage, socket]);

	return(
		<>
			{(message.length < 10 && isLastMsg)? 
				<li className='msgItem'>
					<button onClick={lastMsg} 
						className='btn' 
						style={{padding:'10px 15px',
								margin: '0 auto', 
								display: 'flex'
							}}>
						Last 50 messsage
					</button> 
				</li>
					: 
					<></>}
		</>
	)
}

export default LastMessage;