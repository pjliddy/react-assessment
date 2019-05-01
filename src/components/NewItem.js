import React from 'react';
import './NewItem.css';

class NewItem extends React.Component {
  state = {
    title: '',
    description: '',
    date: '',
    checked: false,
    isValid: true
  };

  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onCancel();
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.title.length > 0) {
      this.submitForm();
    } else {
      this.showMessage();
    }
  }

  submitForm() {
    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      checked: this.state.checked
    });
  }

  showMessage() {
    this.setState({ isValid: false });
    this.titleInput.focus();
  }

  setDate = (dateString) => {
    const temp = dateString.split('-');
    this.setState({ date: `${temp[1]}/${temp[2]}/${temp[0]}` });
  };

  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    const msgClasses = `ui warning message ${!this.state.isValid ? '' : 'hidden' }`;

    return (
      <div className="new-item">
        <div className="ui segment">
          <h3 className="ui dividing header">New ToDo Item</h3>

          <form className="ui large form">

            <div className="fields">
              <div className="eleven wide field">
                <label htmlFor="title">Item Title</label>
                <input
                  type="text"
                  id="title"
                  ref={(input) => { this.titleInput = input; }}
                  onChange={(e) => this.setState({title: e.target.value})} />
              </div>
              <div className="five wide field">
                <label htmlFor="date">Due Date</label>
                <input type="date" id="date" placeholder="Date..."
                  onChange={(e) => this.setDate(e.target.value)}/>
              </div>
            </div>

            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea id="description" rows="3"
                onChange={(e) => this.setState({description: e.target.value})}>
              </textarea>
            </div>

            <div className="button-row">
              <button className="ui button basic" onClick={this.onFormCancel}>
                Cancel
              </button>
              <button className="ui button primary" onClick={this.onFormSubmit}>
                Create
              </button>
            </div>
          </form>

          <div className={msgClasses}>
            <i className="icon large bell outline"></i>
            Your ToDo Item has to have a title. How else are you going to know what to do?
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
