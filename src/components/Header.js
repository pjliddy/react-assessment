import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <div className='page-header'>
      <h1 className="ui header">My ToDo List</h1>

      <div className="toolbar">
        <div className='header-data'>
            <span><strong>Total Items:</strong> 0</span>
            <span><strong>Items Left To Do:</strong> 0</span>
        </div>

        <button className="ui primary button">
          <i className="icon plus"></i>
          New Item
        </button>

      </div>
    </div>
  );
}

export default Header;
