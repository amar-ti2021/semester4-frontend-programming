import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>Saya {props.name}</h1>
      <h2>Saya {props.jurusan}</h2>
    </div>
  );
};

export default Hello;
