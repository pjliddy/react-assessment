import React from 'react';
import './Header.scss';

// page header functional component
const Header = ({ onShowItemForm, numItems, numChecked, showItemForm }) => {
  // conditionally define button classes based on whether itemForm is visible
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
