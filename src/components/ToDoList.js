import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = ({ items, onToggleItem, onDeleteItem }) => {

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
