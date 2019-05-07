import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.scss';

// toDo list functional component
const ToDoList = ({ items, onToggleItem, onDeleteItem }) => {
  // generate list of ToDoItem components
  const itemList = items.map((item, idx) => {
    return <ToDoItem
      item={item}
      key={idx}
      onToggleItem={onToggleItem}
      onDeleteItem={onDeleteItem}
    />
  });

  return(
    <div className="todo-list">
      <div className="ui very relaxed divided list">
        {itemList}
      </div>
    </div>
  );
}

export default ToDoList;
