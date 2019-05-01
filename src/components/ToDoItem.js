import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({item}) => {
  return(
    <div className="item todo-item">
      <i className={"icon large link square outline + (!item.checked ? '' : 'check')"}></i>
      <div className="content">
        <div className="header">
          <p>{item.title}</p>

          {item.date &&
            <p className="date">
              <strong>Due on: </strong>{item.date}
            </p>
          }
        </div>

        {item.description &&
          <p className="description">
            {item.description}
          </p>
        }

        <button className="ui right floated button basic">
          <i className="icon trash alternate outline"></i>
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
