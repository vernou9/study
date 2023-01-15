import './App.css';
import { useState } from "react";
import { createContext,useContext } from 'react';

const userContext=createContext();

function App() {
  return(
    <>
    <userContext.Provider value={{user:"Herman Gref"}}> 
      <Component1 />
    </userContext.Provider>
    </>
  );
}
export default App;

function Component1() {
  const {user}=useContext(userContext);

  return (
    <>  
      <Component2 />
      <h1>{`Hello ${user}!`}</h1>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const {user}=useContext(userContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root"))
// .render(<Component1 />);


