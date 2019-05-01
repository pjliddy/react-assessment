import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

class ToDoList extends React.Component {
  renderList() {
    return this.props.items.map((item, idx) => {
      return <ToDoItem
        item={item}
        key={idx}
        onToggleChecked={this.props.onToggleChecked}
        onDeleteItem={this.props.onDeleteItem}
      />;
    });
  }

  render() {
    return (
      <div className="todo-list">
        <div className="ui very relaxed divided list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default ToDoList;
