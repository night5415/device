import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div> 
        <input type="file"  capture="camera" />  
       </div>
    );
  }
}
