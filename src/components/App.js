import React, { Component } from "react";
import Person from "../models/Person.js"; 
import HelloWorld from "./HelloWorld.js"; 
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.user = new Person("Phuc", 22);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>My React App!</h1>
        
        <HelloWorld />

        <p style={{ fontSize: '20px', color: 'darkblue', marginTop: '20px' }}>
          {this.user.sayHello()}
        </p>
      </div>
    );
  }
}

export default App;