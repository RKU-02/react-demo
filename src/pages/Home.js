import React, { Component } from 'react';
import Title from '../component/Title';

export default class Home extends Component{
    constructor(){
        super()
        this.state={
            title:'Tatwasoft',
            discription:'This is bootcamp of React and .Net'
        }
    }
  render() {
      return (
      
             <div>
                <h2>{this.state.title}</h2>
                <h2>{this.state.discription}</h2>
             </div>
           )
  }
}
