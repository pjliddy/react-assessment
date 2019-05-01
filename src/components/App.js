import React from 'react';
import Header from './Header';
import NewItem from './NewItem';
import ToDoList from './ToDoList';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
    showNewItem: false
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
      showNewItem: false
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="ui container text">
        <Header onShowNewItem={this.onShowNewItem} />
        {this.state.showNewItem &&
          <NewItem
            isVisible={this.state.showNewItem}
            onSubmit={this.onCreateItem}
            onCancel={this.onCloseNewItem}
          />
        }
        <ToDoList />
      </div>
    );
  }
}

export default App;
