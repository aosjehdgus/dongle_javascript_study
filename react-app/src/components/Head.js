import React, { Component } from 'react';

class Head extends Component{
    render(){
      return(
  
        <header>
          <h1> {this.props.title} </h1>
    
        </header>
  
      );
    }
  }

export default Head;
  