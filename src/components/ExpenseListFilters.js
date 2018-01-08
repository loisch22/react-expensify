import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

//component has access to data below, only want filters.text for now
//need onChange - takes function, when onChange runs, value changes
const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => { props.dispatch(setTextFilter(e.target.value));
    }}/>
  </div>
);

//what data we want from the store - also gives access to dispatch
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
