import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';
import { Link, Router } from '@reach/router';
import ViewAllItems from "./components/ViewAllItems";
import CreateNewItem from './components/CreateNewItem';
import ViewOneItem from './components/ViewOneItem';
import UpdateItem from './components/UpdateItem';


function App(props) {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link className ="btn btn-success m-1" to="/api/create/item">Create New Item</Link>
      <Link className ="btn btn-primary m-1" to="/">Home</Link>
      <Router>
          <ViewAllItems path ="/" ></ViewAllItems>
          <CreateNewItem path="/api/create/item"></CreateNewItem>
          <ViewOneItem path = "/api/oneItem/:id"></ViewOneItem>
          <UpdateItem path ="/api/update/:id"></UpdateItem>
      </Router>
    </div>
  );
}

export default App;
