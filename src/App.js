
import './App.css';

function App() {
  const tg = window.Telegram.WebApp
  const test =  tg.initDataUnsafe.user
  return (
    <div className="App">
    
      
     
             тут дані {test}
       
        
   
    </div>
  );
}

export default App;
