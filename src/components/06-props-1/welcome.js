import React from "react";
import "./welcome.scss";

//  1. YOL -- destructuring
const Welcome = ({ firstName, lastName }) => {
  return (
    <div className="welcome">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
};

/*  2. YOL
 const Welcome = (props) => {
  const { firstName, lastName } = props;
  return (
    <div className="welcome">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
}; */

/*      3. YOL
const Welcome = (props) => {
    return (
      <div className="welcome">
        <h2>
          Welcome {props.firstName} {props.lastName}
        </h2>
      </div>
    );
  }; */

export default Welcome;
