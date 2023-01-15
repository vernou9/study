import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function Laptop() {
  const[info, setInfo]= useState({brand:"Apple",model:"Macbook pro",year :"2023", color:"Space gray"}) 
  
  return (
    <div className='App'>
      <header className='App-header'>
      <h1>My laptop is {info.brand}</h1>
      <p >
        It is a {info.color} {info.model} from {info.year}.
      </p>
      </header>
      <button> silver </button>
    </div>
  )
  }
  

export default Laptop;
