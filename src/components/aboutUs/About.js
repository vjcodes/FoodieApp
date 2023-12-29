import React from "react";
import UserClass from "../userClass/UserClass";
import UserContext from "../../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste react web series</h2>

        <UserClass name="First" location="Gurugram" contact="@vjcodes" />
      </div>
    );
  }
}

export default About;

/*
- Parent Constructor
- Parent render
  
  - First Constructor
  - First render

  - Second Constructor
  - Second render
  
  <DOM UPDATED - IN SINGLE BATCH>

  - First ComponentDidMount
  - Second ComponentDidMount

- Parent ComponentDidMount
*/
