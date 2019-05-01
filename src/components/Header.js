import React from 'react';
import './Header.css';

const Header = ({ onShowNewItem, numItems, numChecked, showNewItemForm }) => {
  const buttonClasses = `ui primary button ${!showNewItemForm ? '' : 'disabled'}`;

  return(
    <div className='page-header'>
      <h1 className="ui header">My ToDo List</h1>
      <div className="toolbar">
        <div className='header-data'>
            <span><strong>Total Items: </strong>{numItems}</span>
            <span><strong>Items Left To Do: </strong>{numChecked}</span>
        </div>
        <button className={buttonClasses} onClick={onShowNewItem}>
          <i className="icon plus"></i>
          New Item
        </button>
      </div>
    </div>
  );
}

export default Header;
