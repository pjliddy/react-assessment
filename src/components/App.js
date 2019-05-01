import React from 'react';
import Header from './Header';
import NewItem from './NewItem';
import ToDoList from './ToDoList';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
    showNewItem: false,
    numItems: 0,
    numChecked: 0
  };

  onShowNewItem = () => {
    this.setState({ showNewItem: true });
  }

  onCloseNewItem = () => {
    this.setState({ showNewItem: false });
  }

  onCreateItem = item => {
    this.setState({
      items: [...this.state.items, item],
      showNewItem: false,
      numItems: this.state.numItems + 1
    });
  }

  onToggleChecked = item => {
    console.log(`toggleChecked: ${item.title} = ${item.checked}`);
  }

  onDeleteItem = item => {
    this.setState({
      items: this.state.items.filter(i => i !== item),
      numItems: this.state.numItems - 1
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="ui container text">
        <Header
          numItems={this.state.numItems}
          numChecked={this.state.numChecked}
          onShowNewItem={this.onShowNewItem}
        />
        {this.state.showNewItem &&
          <NewItem
            isVisible={this.state.showNewItem}
            onSubmit={this.onCreateItem}
            onCancel={this.onCloseNewItem}
          />
        }
        <ToDoList
          items={this.state.items}
          onToggleChecked={this.onToggleChecked}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}

export default App;
