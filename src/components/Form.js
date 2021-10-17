import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "George",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    if(event.target.value != 5){
      this.setState({
        firstName: event.target.value
      })
    }
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;