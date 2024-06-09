
import './App.css';

function App() {
  const tg = window.Telegram.WebApp
  const test =  tg.initDataUnsafe?.user?.username
  return (
    <div className="App">
    
      
     
           <button>{test}</button>
       
        
   
    </div>
  );
}

export default App;
