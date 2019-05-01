import React from 'react';
import Header from './Header';
import NewItem from './NewItem';
import ToDoList from './ToDoList';
import './App.css';

class App extends React.Component {
  state = { items: [] };

  render() {
    return (
      <div className="ui container text">
        <Header />
        <NewItem />
        <ToDoList />
      </div>
    );
  }
}

export default App;
