import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Animation from './pages/animation/index';

const Chat = lazy(()=>import("./pages/chat/chat"));
const Login = lazy(()=>import('./pages/auth/login'));
const Regis = lazy(()=>import('./pages/auth/regis'));

function App() {
  const [chatTokin, setChatTokin] = useState(window.localStorage.getItem("chatToken"));
  const [username, setUserName] = useState("");
  return (
    <>
      <Suspense fallback={<Animation speed={"1s"}/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                (chatTokin) ? 
                  <Chat 
                      setChatTokin={setChatTokin} 
                      username={username}
                  /> : 
                  <Login 
                      setUserName={setUserName} 
                      setChatTokin={setChatTokin}
                  />
              } />
            <Route path="/register" element={<Regis setUserName={setUserName} setChatTokin={setChatTokin}/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
