import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)

        this.state={
                number:0
            }
    }

    handlechange(){
        this.setState({
            number:this.state.number+1
            
        }
        )
     }

     change(){
      this.setState({
          number:this.state.number-1
          
      }
      )
      
  }

  render() {
    return (
      <div>
         <h3> Number : {this.state.number}</h3>
         <button style={{color:'ButtonHighlight',backgroundColor:'dimgray'}}
                onClick={()=>this.handlechange()}>increase</button>
         <button style={{color:'ButtonHighlight',backgroundColor:'dimgray'}}
                onClick={(num)=>this.change(num>0)}>decrease</button>
        
      </div>
    )
  }
}
