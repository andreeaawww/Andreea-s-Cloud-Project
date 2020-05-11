import React, { Component } from 'react';
import config from '../config'
import load from '../helpers/spreadsheet'
import Row from './Row'
import "../App.css";

export class HR extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      HR: [],
      isShown: false
    }
  }
  
  componentDidMount = () => {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }
  
  
  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        // if (this.getDataFromResponse !== undefined){
      
        // } else
        load(this.getDataFromResponse)
        // console.log("date pentru tabel")
        // console.log(this.state.data)
        // }
      });
  };
  
  getDataFromResponse = (loadedData) => {
    console.log({
      'loaded data from response': loadedData.result.values
    })
    return this.setState({
      HR: loadedData.result.values
    })
      
    
  }
  
  
  render() {
    //console.log(this.state.data)
    
    const rows = this.state.HR.map((row, index) => {
      return (
        <Row
          style={{
            color: "#383838",
            backgroundColor: "#F0F0F0",
            maxWidth:"110px"
          }}
          data={row}
          isHeader={index === 0}
          key={index}
        />  
      )})
    return (
      
      <div>
        
        {!this.state.isShown ?  <button onClick={() => this.setState({isShown: true})}>Show Google Sheets Data</button> : (
          <div>
          <button onClick={() => this.setState({isShown: false})}>Hide Google Sheets Data</button>
            <table>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}