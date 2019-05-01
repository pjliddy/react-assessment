import React from 'react';
import './ToDoItem.css';

// NOTE: add/remove 'check' from className to toggle

const ToDoItem = () => {
  return(
    <div className="item todo-item">
      <i className="icon large link check square outline"></i>

      <div className="content">
        <div className="header">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <p className="date"><strong>Due on: </strong>06/01/2019</p>
        </div>

        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <button className="ui right floated button basic">
          <i className="icon trash alternate outline"></i>
          Delete Item
        </button>

      </div>

    </div>
  );
}

export default ToDoItem;
