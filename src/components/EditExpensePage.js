import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//get props route based on console - like go into match-params-id value
const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push("/");
      }}>Remove</button>
    </div>
  );
};

//give current state to component
//set expense to the expense with matching id as the id passed in via url
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

//pass it in to make sure correct prop is set - not the entire expenses store, just the one specific expense
export default connect(mapStateToProps)(EditExpensePage);
