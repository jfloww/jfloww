import './App.css';
import { useState } from 'react';

import Header from './component/Header';
import Login from './component/Login';
import Main from './component/main';
import Footer from './component/footer';

// 로그인 화면 모션 그래픽 넣기
// 버튼 클릭시 색 변경
// 버튼 클릭 페이지 이동
// 애들 사진 넣기


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  
  //HTML 
  return (
    <div className='App'>
      {loggedIn ? (
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;