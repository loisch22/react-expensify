import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

//component has access to data below, only want filters.text for now
//need onChange - takes function, when onChange runs, value changes
const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => { props.dispatch(setTextFilter(e.target.value));
    }}/>
    <select onChange={(e) => {
      e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount())
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

//what data we want from the store - also gives access to dispatch
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
