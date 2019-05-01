import React from 'react';
import Header from './Header';
import NewItem from './NewItem';
import ToDoList from './ToDoList';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
    numItems: 0,
    numChecked: 0,
    showNewItemForm: false
  };

  onShowNewItem = () => {
    this.setState({ showNewItemForm: true });
  }

  onCloseNewItem = () => {
    this.setState({ showNewItemForm: false });
  }

  onCreateItem = item => {
    this.setState({
      items: [...this.state.items, item],
      showNewItemForm: false,
      numItems: this.state.numItems + 1
    });
  }

  onToggleChecked = item => {
    const copy = Object.assign({}, item);
    copy.checked = !copy.checked;

    this.setState(state => {
      return {
        items: state.items.map(e => e === item ? copy : e),
        numChecked: this.state.numChecked + (!copy.checked ? -1 : 1)
      };
    });
  }

  onDeleteItem = item => {
    this.setState({
      items: this.state.items.filter(i => i !== item),
      numItems: this.state.numItems - 1,
      numChecked: this.state.numChecked + (item.checked ? -1 : 0)
    });
  }

  render() {
    return (
      <div className="ui container text">
        <Header
          numItems={this.state.numItems}
          numChecked={this.state.numChecked}
          showNewItemForm={this.state.showNewItemForm}
          onShowNewItem={this.onShowNewItem}
        />
        {this.state.showNewItemForm &&
          <NewItem
            isVisible={this.state.showNewItemForm}
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
