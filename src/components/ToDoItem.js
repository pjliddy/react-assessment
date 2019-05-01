import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
  toggleCheck = () => {
    this.props.onToggleChecked(this.props.item);
  }

  deleteItem = () => {
    this.props.onDeleteItem(this.props.item);
  }

  render(){
    const { title, description, date, checked } = this.props.item;
    const checkClasses = `icon large link square outline ${!checked ? '' : 'check'}`;

    return (
      <div className="item todo-item">
        <i className={checkClasses}
          onClick={() => this.toggleCheck()}></i>
        <div className="content">
          <div className="header">
            <p>{title}</p>
            {date && <p className="date"><strong>Due on: </strong>{date}</p>}
          </div>

          {description && <p className="description">{description}</p>}

          <button className="ui right floated button basic"
            onClick={() => this.deleteItem()}>
            <i className="icon trash alternate outline"></i>
            Delete Item
          </button>
        </div>
      </div>
    )
  }
}

export default ToDoItem;
