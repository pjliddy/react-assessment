import React from 'react';
import './Header.css';

const Header = ({ onShowItemForm, numItems, numChecked, showItemForm }) => {
  const buttonClasses = `ui primary button ${!showItemForm ? '' : 'disabled'}`;

  return(
    <div className='page-header'>
      <h1 className="ui header">My ToDo List</h1>
      <div className="toolbar">
        <div className='header-data'>
            <span><strong>Total Items: </strong>{numItems}</span>
            <span><strong>Items Left To Do: </strong>{numChecked}</span>
        </div>
        <button className={buttonClasses} onClick={onShowItemForm}>
          <i className="icon plus"></i>
          New Item
        </button>
      </div>
    </div>
  );
}

export default Header;
