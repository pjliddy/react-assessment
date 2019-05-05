import React from 'react';
import './PageHeader.scss';

// page header functional component
const Header = ({ onShowItemForm, numItems, numUnchecked, showItemForm }) => {
  // conditionally define button classes based on whether itemForm is visible
  const buttonClasses = `ui primary button ${!showItemForm ? '' : 'disabled'}`;

  return(
    <div className='page-header'>
      <h1 className="ui header">My ToDo List</h1>
      <div className="toolbar">
        <div className='header-data'>
            <div className='header-data-item'>
              <span className="header-data-label">Total Items: </span>{numItems}
            </div>
            <div className='header-data-item'>
              <span className="header-data-label">Items Left To Do: </span>{numUnchecked}
            </div>
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
