import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
      {props.isFinished ? <strike>{props.item}</strike> : props.item}

      <button onClick={() => {
        props.handleDelete(props.item);
      }}>Delete</button>

      <button onClick={() => {
        props.finishItem(props.item);
      }}>Finish</button>
    </div>
  );
};

export default TodoItem;