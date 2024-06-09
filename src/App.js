import React from 'react'
import './App.css';
import MainPage from './component/main_page';

const App = ()=> {
  const tg = window.Telegram.WebApp
  const user =  tg.initDataUnsafe?.user
  return (
    <div className="App">

          <MainPage user={user}/>
        
   
    </div>
  );
}

export default App;
