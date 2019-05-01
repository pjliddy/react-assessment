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
    showItemForm: false
  };

  onShowItemForm = () => {
    this.setState({ showItemForm: true });
  }

  onCloseItemForm = () => {
    this.setState({ showItemForm: false });
  }

  onCreateItem = item => {
    this.setState({
      items: [...this.state.items, item],
      showItemForm: false,
      numItems: this.state.numItems + 1
    });
  }

  onDeleteItem = item => {
    this.setState({
      items: this.state.items.filter(i => i !== item),
      numItems: this.state.numItems - 1,
      numChecked: this.state.numChecked + (item.checked ? -1 : 0)
    });
  }

  onToggleItem = item => {
    const copy = Object.assign({}, item);
    copy.checked = !copy.checked;

    this.setState(state => {
      return {
        items: state.items.map(e => e === item ? copy : e),
        numChecked: this.state.numChecked + (!copy.checked ? -1 : 1)
      };
    });
  }

  render() {
    return (
      <div className="ui container text">
        <Header
          numItems={this.state.numItems}
          numChecked={this.state.numChecked}
          showItemForm={this.state.showItemForm}
          onShowItemForm={this.onShowItemForm}
        />
        {this.state.showItemForm &&
          <NewItem
            isVisible={this.state.showItemForm}
            onSubmit={this.onCreateItem}
            onCancel={this.onCloseItemForm}
          />
        }
        <ToDoList
          items={this.state.items}
          onToggleItem={this.onToggleItem}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}

export default App;
