import React, { Component } from "react";
import "./App.css";
import {HR} from "./components/HR";
import Holiday from './components/Holiday'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Absenta la locul de munca</h1>
          <div>
            <img src="https://drive.google.com/uc?id=1-XkqU1S-dBk1xQhsm1mPNRHUW7K_3FVI"/>
            <img src="https://drive.google.com/uc?id=1-TZAiyD8biM4LzKzSJU2ixZhK58dN26V"/>
            <img src="https://drive.google.com/uc?id=1-RIUVfs3IfYNAIvJ5Xw6thM3LqjEH0zF"/>
          </div>
        </header>
        <Holiday />
        <HR />
      <div>
        
      </div>
      </div>
    );
  }
}
export default App;