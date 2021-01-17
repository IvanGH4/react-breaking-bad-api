import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import List from './components/List';
import './App.css';

function App() {

  const [chars, setChars] = useState([]);

  const url = 'https://www.breakingbadapi.com/api/characters';

  async function getData() {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      console.log(data);
      setChars(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, []);  


  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path='/list' render={() => <List chars={chars} />}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
