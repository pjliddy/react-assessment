import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
  render(){
    return (
      <div className="item todo-item">
        <i className={"icon large link square outline + (!item.checked ? '' : 'check')"}
          onClick={() => this.props.onToggleChecked(this.props.item)}></i>
        <div className="content">
          <div className="header">
            <p>{this.props.item.title}</p>

            {this.props.item.date &&
              <p className="date">
                <strong>Due on: </strong>{this.props.item.date}
              </p>
            }
          </div>

          {this.props.item.description &&
            <p className="description">
              {this.props.item.description}
            </p>
          }

          <button className="ui right floated button basic"
            onClick={() => this.props.onDeleteItem(this.props.item)}>
            <i className="icon trash alternate outline"></i>
            Delete Item
          </button>
        </div>
      </div>
    )
  }
}

export default ToDoItem;
