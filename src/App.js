import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Chat = lazy(()=>import("./pages/chat"));
const Login = lazy(()=>import('./pages/login'));
const Regis = lazy(()=>import('./pages/regis'));

function App() {
  const [chatTokin, setChatTokin] = useState(false);
  return (
    <>
      <Suspense fallback={<>Error from React Lazy</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                (chatTokin) ? <Chat setChatTokin={setChatTokin}/> : <Login/>
              } />
            <Route path="/register" element={<Regis/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
