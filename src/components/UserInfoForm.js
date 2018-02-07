import React from 'react';

export default class UserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lois',
      age: 27
    }
  };

  onChangeName = (e) => {
    let name = e.target.value;
    console.log(name);
    this.setState(() => ({ name }));
  };

  render() {
    return (
      <div>
        <form>
          <label for="name">Name:</label>
          <input type="text" value={this.state.name} onChange={this.onChangeName}/>
        </form>
      </div>
    );
  }
};
