import React from "react";

const Todo = props => {
  return (
    <div>
      <ul className="display">
        {props.todos.map(item => {
          return (
            <li className="todos" key={item.id}>
              Title : {item.title} <br />
              Status : {JSON.stringify(item.completed)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
