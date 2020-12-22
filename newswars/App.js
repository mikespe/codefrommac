import React from 'react';
import logo from './logo.svg';
import './App.css';
var webscrape = require('./webscraper.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnn: '',
      fox: ''
    };
  }

  componentDidMount() {
    webscrape.result.then(result => {
      console.log(result)
      this.setState({
        cnn: result.cnn,
        fox: result.fox
      })
    }).catch(error => {
      console.log(error);
      })
    }


  render() {
    return (
      <div>
        <h1><span style={{color: 'blue'}}>CNN: <br/>{this.state.cnn}</span> 
        <br/>VS<br/>
         <span style={{color: 'red'}}>FOX: <br/>{this.state.fox}</span></h1>
      </div>
    );
  }
}

export default App;
