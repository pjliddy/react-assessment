import React from 'react';
import './ToDoItem.css';

// individual to do item component
class ToDoItem extends React.Component {
  // execute callback when checkbox is clicked
  toggleCheck = () => {
    this.props.onToggleItem(this.props.item);
  }

  // execute callback when delete button is clicked
  deleteItem = () => {
    this.props.onDeleteItem(this.props.item);
  }

  render(){
    // destructor properties for item in props
    const { title, description, date, checked } = this.props.item;
    // conditionally define checkbox classes based on whether item is checked
    const checkClasses = `icon large link square outline ${!checked ? '' : 'check'}`;

    return (
      <div className="item todo-item">
        <i className={checkClasses}
          onClick={() => this.toggleCheck()}></i>
        <div className="content">
          <div className="header">
            <p className="title">{title}</p>
            {/* conditionally display date if there is a value */}
            {date && <p className="date"><strong>Due on: </strong>{date}</p>}
          </div>

          {/* conditionally display description if there is a value */}
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
