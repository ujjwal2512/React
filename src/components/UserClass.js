import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name: "Dummy",
            location: "Default",
            avatar_url: "null",
        }
    };
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/ujjwal2512");
    const json = await data.json();
    this.setState({
        userInfo:json,
    });
    console.log(json);
  }
  render() {
    return (
      <div className="user-card">
        <img className="github-dp" src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;
