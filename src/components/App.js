import React from 'react';
import PageHeader from './PageHeader';
import NewItem from './NewItem';
import ToDoList from './ToDoList';
import './App.scss';

// top-level App component
class App extends React.Component {
  // initialize App state
  state = {
    items: [],
    numItems: 0,
    numUnchecked: 0,
    showItemForm: false
  };

  // event handler for displaying item creation form
  onShowItemForm = () => {
    this.setState({ showItemForm: true });
  }

  // event handler for hiding item creation form
  onCloseItemForm = () => {
    this.setState({ showItemForm: false });
  }

  // event handler for submitting item creation form
  onCreateItem = item => {
    this.setState({
      items: [...this.state.items, item],
      showItemForm: false,
      numItems: this.state.numItems + 1,
      numUnchecked: this.state.numUnchecked + 1
    });
  }

  // event handler for deleting an item
  onDeleteItem = item => {
    this.setState({
      items: this.state.items.filter(i => i !== item),
      numItems: this.state.numItems - 1,
      numUnchecked: this.state.numUnchecked + (item.checked ? 0 : -1)
    });
  }

  // event handler for toggling the checked property of an item
  onToggleItem = item => {
    // change checked property on copy of item object
    const copy = Object.assign({}, item);
    copy.checked = !copy.checked;

    // replace item object and update numUnchecked in state
    this.setState(state => {
      return {
        items: state.items.map(e => e === item ? copy : e),
        numUnchecked: this.state.numUnchecked + (copy.checked ? -1 : 1)
      };
    });
  }

  render() {
    return (
      <div className="ui container text">
        <PageHeader
          numItems={this.state.numItems}
          numUnchecked={this.state.numUnchecked}
          showItemForm={this.state.showItemForm}
          onShowItemForm={this.onShowItemForm}
        />

        {/* conditionally display NewItem form based on showItemForm */}
        {this.state.showItemForm &&
          <NewItem
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
