import React from 'react';
import './NewItem.css';

class NewItem extends React.Component {
  render() {
    return (
      <div className="new-item">
        <div className="ui segment">
          <h3 className="ui dividing header">New ToDo Item</h3>

          <form className="ui large form">
            <div className="fields">
              <div className="eleven wide field">
                <label htmlFor="title">Item Title</label>
                <input type="text" id="title" />
              </div>

              <div className="five wide field">
                <label htmlFor="date">Due Date</label>
                <input type="date" id="date" placeholder="Date..." />
              </div>
            </div>

            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea id="description" rows="3"></textarea>
            </div>

            <div className="button-row">
              <button className="ui button basic">Cancel</button>
              <button className="ui button primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewItem;
