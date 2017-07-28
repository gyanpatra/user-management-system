import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AddUser from './components/add-user';
import UsersList from './components/users-list';
import './styles/index.css';


const App = () => (
  <div className="container">
    <AddUser />
    <label>My Team</label><span className="badge badge-pill badge-default">11</span>
    <UsersList />

  </div>
);

render(<App />, document.getElementById('root'));
