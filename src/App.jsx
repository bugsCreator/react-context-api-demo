import './App.css';
import { useState, createContext, useContext } from "react";
const UserContext = createContext()

function App() {




  const state = useState("Jesse Hall");
  return (
    <UserContext.Provider value={state} >
    <div className="App">
      
      <header className="App-header">
          <h1>Hello There :  {state[0]}</h1>
          <Dialog />
      </header>
    </div>
     </UserContext.Provider >
  );
}

function Dialog(props) {
  const state = useContext(UserContext);
  return (
    <div color="blue">
      <h1 className="Dialog-title">
        <input type="text" onChange={(e) => { console.log(e.target.value); (state[1])(e.target.value)  }} />
      </h1>

    </div>
  );
}

export default App;
