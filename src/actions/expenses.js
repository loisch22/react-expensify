import uuid from 'uuid';

// current code does:
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// asynchronous:
// component calls action generator
// action generator returns function
// component dispatches function - redux does not support functions so need a module
// function runs (has the ability to dispatch other actions/do whatever)

// ADD_EXPENSE
export const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),//npm library uuid
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//export named exports - import file and grab the ones we need
