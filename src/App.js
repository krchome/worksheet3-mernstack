import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShowBookList from './components/ShowBookList';
import CreateBook  from './components/CreateBook';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
          <Route  path='/' element={<ShowBookList/>}/>
          <Route path='/create-book' element={<CreateBook/>} />
          </Routes>
          
        </div>
      </Router>
    );
  }
}


export default App;
