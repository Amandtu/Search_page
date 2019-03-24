import React from "react";

const Display = props => {
  return (
    <div>
      <ul className="display">
        {props.users.map(item => {
          return (
            <li className="users" key={item.id}>
              Name : {item.name} <br />
              Company: {item.company.name} <br />
              Website: {item.website}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Display;
