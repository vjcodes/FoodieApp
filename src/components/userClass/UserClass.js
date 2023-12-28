import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    console.log("Child component did mount");
    const data = await fetch("https://api.github.com/users/vjcodes");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    // this.timer = setInterval(() => {
    //   console.log("Namaste react op");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("componentWillUnmout called");
  }

  render() {
    console.log("Child render");

    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        {/* <h4>Contact: {contact}</h4> */}
      </div>
    );
  }
}

export default UserClass;

/*

----Mounting----------

Constructor(dummy)
Render (dummy)
    <HTML Dummy>
ComponentDidMount
    <API Call>
    <this.setState>

----UPDATE----------

    render(Api data)
    <HTML (new API data)>
    ComponentDidUpdate()

*/
