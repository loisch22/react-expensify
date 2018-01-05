import React from 'react';

//get props route based on console - like go into match-params-id value
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
