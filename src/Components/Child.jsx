import React from "react";

const Child = (props) => {
  return (
    <div>
      {/* <h2>Sheikh Faisal Nadeem</h2> */}

        <h2>My Name is :   {props.Name} </h2>
        <h2>My Youtube Channel Name is : {props.YTName} </h2>
        <h2>My Adress is : {props.Adress}  </h2>
        <h2>My Phone No is : {props.other.Phone}  </h2>
        <h2>My Age is : {props.other.Age}  </h2>


    </div>
  );
};

export default Child;
