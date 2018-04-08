import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor()  {
    super();

    this.state = {
        modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  onCancel = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button
           className="button -secondary"
           onClick={this.openModal}>Remove Expense</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Remove Modal"
            className="modal"
            overlayClassName="overlay"
            onRequestClose={this.onCancel}
          >
            <h1>Modal Content</h1>
            <button
             className="button -secondary"
             onClick={this.onClick}>Delete Expense</button>
           <button
            className="button -secondary"
            onClick={this.onCancel}>Cancel</button>
          </Modal>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

// pass in props since removeExpense needs prop
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
