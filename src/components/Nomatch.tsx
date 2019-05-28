import React from "react";

const NoMatch: React.FC<{ location: any }> = ({ location }) => {
  return (
    <div>
      <h3>No match {location.pathname}</h3>
    </div>
  );
};

export default NoMatch;
