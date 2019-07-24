import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      edit: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.baseState = this.state;
  }



  handleChange(event) {
    this.setState({ [event.target.className]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ edit: false });
    this.baseState = this.state;
    event.preventDefault();
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  render() {
    const edit = this.state.edit;

    if (edit) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
          <input className="firstName" type="text" placeholder={this.state.firstName} onChange={this.handleChange}></input>
          </label>
          <label>
            Last name:
          <input className="lastName" type="text" placeholder={this.state.lastName} onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Save" />
          <button className="cancel" onClick={() => { this.setState(this.baseState) }}>Cancel</button>
        </form>
      );
    } else {
      return (
        <div>
          <div className="firstname">
            <h2>First name: {this.state.firstName}</h2>
          </div>
          <div className="lastname">
            <h2>Last name: {this.state.lastName}</h2>
          </div>
          <div className="submit-button">
            <button onClick={() => this.handleEdit()}>Edit</button>
          </div>
        </div>
      );
    }
  }

}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
