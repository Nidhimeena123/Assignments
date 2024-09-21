import logo from '../logo.svg';
import React from 'react'

function HelloWorld() {
  return (
    <div>
        <header className="App-header">
            <h1>React JS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <button style={{backgroundColor:'blue', border:'none',padding:'30px 80px',fontSize:'30px',color:'white'}}>
            Hello World</button>
        </p>
      </header>
    </div>
  )
}

export default HelloWorld