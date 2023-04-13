import React from "react";

const Alert = (props) => {
  const { children } = props;
  return (
    <div>
      <span>{children}</span>
    </div>
  );
};

export default Alert;
