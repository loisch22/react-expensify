import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => (
  <div>
    <h3>{props.description}</h3>
    <p>Amount: {props.amount}</p>
    <p>Created at: {props.createdAt}</p>
    <button onClick={() => {
      props.dispatch(removeExpense({ id: props.id }))
    }}>Remove</button>
  </div>
);

//connect() only gives access to dispatch
export default connect()(ExpenseListItem);
