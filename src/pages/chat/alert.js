// import { useEffect, useState } from 'react';
import '../../assets/alert.css';

function Alert({active, alertHandler}) {

    return ( 
        <>
            <div className="alertUser" style={active}>
                <h2>Siz haqiqatdan ham chiqmoqchimisiz ?</h2>
                <div className="row">
                    <button 
                        className="btn" 
                        onClick={()=>alertHandler(true)}>Xa</button>
                    <button 
                        className="btn" 
                        onClick={()=>alertHandler(false)}>Yo'q</button>
                </div>
            </div>
        </>
     );
}

export default Alert;