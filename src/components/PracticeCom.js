import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';

export const PracticeCom = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const totalFormat = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>PracticeCom Viewing {expenseCount} {expenseWord} totaling {totalFormat}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenseList = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: expenseList.length,
    expenseTotal: getExpenseTotal(expenseList)
  };
};

export default connect(mapStateToProps)(PracticeCom);
