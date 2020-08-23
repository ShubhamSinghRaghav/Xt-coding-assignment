import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/sidebar';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.url_saved='/';
    this.prev_url='/';
  }
  getPath = (path)=>{
    this.prev_url = this.url_saved;
    this.url_saved = '/'+path;
    // this.props.history.push(this.url_saved);
    console.log(this.url_saved)
  }

  render() {
    return(
      
    <Route
      exact path={this.url_saved} 
      render={()=>(
        <Sidebar getPath = {(path)=>{
          this.getPath(path) 
          // history.push(this.prev_url)
        }}/>
      )}
    />
    )
    // return (
    //   <Sidebar getPath = {this.getPath}/>
    // )
  }
}

export default App;
