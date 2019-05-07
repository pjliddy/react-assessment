import React from 'react';
import './NewItem.scss';

// new item input form component
class NewItem extends React.Component {
  // initialize form state
  state = {
    title: '',
    description: '',
    date: '',
    checked: false,
    isValid: true
  };

  // event handler for cancel button on form executes onCancel callback
  onFormCancel = (event) => {
    event.preventDefault();
    this.props.onCancel();
  }

  // event handler for submit button on form
  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.title.length > 0) {
      this.submitForm();
    } else {
      this.showMessage();
    }
  }

  // execute onSubmit callback with values for new item
  submitForm() {
    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      checked: this.state.checked
    });
  }

  // display validation error message
  showMessage() {
    this.setState({ isValid: false });
    this.titleInput.focus();
  }

  // convert default date string to mm/dd/yyyy
  setDate = (dateString) => {
    const values = dateString.split('-');
    this.setState({ date: `${values[1]}/${values[2]}/${values[0]}` });
  };

  // set focus on title input when form is displayed
  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    // conditionally define message classes based on whether form is valid
    const msgClasses = `ui icon error message ${!this.state.isValid ? '' : 'hidden' }`;

    return (
      <div className="new-item">
        <div className="ui segment">
          <h3 className="ui dividing header">New ToDo Item</h3>

          <form className="ui large form">

            <div className="fields">
              <div className="eleven wide field">
                <label htmlFor="title">Item Title <span className="required">(required)</span></label>
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
            <i className="icon big frown outline"></i>
            <div className="content">
              <div className="header">
                Your ToDo Item has to have a title.
              </div>
              <p>
                How else are you going to know what you need to do?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
