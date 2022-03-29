import React from "react";
import "./App.css";

const Col = (props) => {
  return (
    <div className="col1">
      <h3 className="header">{props.title}</h3>
      <p>{props.content1}</p>
      <p>{props.content2}</p>
    </div>
  );
};

export default Col;
