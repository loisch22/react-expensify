import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// works with dispatch not state
const mapDispatchToProps = (dispatch) => ({
  // same name as action generator
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

// undefined refers to mapStateToProps which is undefined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
