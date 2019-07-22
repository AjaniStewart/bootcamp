import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

const ContactCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Mobile Phone: {props.mobileNumber}</p>
      <p>{props.workNumber ? "Work Phone: " + props.workNumber : ""}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobileNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  workNumber: PropTypes.string
};

class Decrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
    };
  }

  increment() {
    this.setState({ number: this.state.number + 1 });
  }

  decrement() {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.number}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }

}

Decrement.propTypes = {
  number: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      <ContactCard name="Ajani" mobileNumber="123-456-7890" email="email@example.com" workNumber="929-432-1241" />
      <ContactCard name="Jason" mobileNumber="987-654-3201" email="email1@example.com" />
      <ContactCard name="Marin" mobileNumber="122-234-3021" email="email2@example.com" />
      <Decrement number={10} />
      <Decrement number={100} />
    </div>
  );
}

export default App;
