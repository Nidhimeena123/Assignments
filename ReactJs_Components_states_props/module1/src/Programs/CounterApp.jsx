import React, { Component } from 'react'

export class CounterApp extends Component {

    constructor(){
        super();
        this.state= {
            count : 0
        }
    }

  render() {
    return (
      <div>
        <div style={{textAlign:'center',margin:'60px'}}>
        <h1 style={{fontSize:'50px',margin:'20px'}}>Counter App</h1>
        <h1 style={{fontSize:'60px',margin:'20px'}}>{this.state.count}</h1>
        <button style={{backgroundColor:'green', color:'white',padding:'20px 40px',fontSize:'30px',margin:'10px'}}
        onClick={ () => this.setState ( {count:this.state.count + 1})}>
            Increment</button>
        <button style={{backgroundColor:'red',color:'white',padding:'20px 40px',fontSize:'30px'}}
        onClick={ () => this.setState ( {count: this.state.count - 1})}>
            Decrement</button>
    </div>
      </div>
    )
  }
}

export default CounterApp