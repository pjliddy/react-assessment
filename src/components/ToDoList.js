import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <div className="ui very relaxed divided list">
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    );
  }
}

export default ToDoList;
