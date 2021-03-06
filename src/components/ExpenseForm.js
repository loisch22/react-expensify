import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      errorState: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    // regular expression regex - change to require one digit before . - and clear empty amount aka !amount
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  //prevent user from clearing calendar, only if value is passed can it be changed, else it does nothing stays on default current date
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };
  onSubmit = (e) => {
    //prevents full page refresh, js takes over render
    e.preventDefault();
     if (!this.state.description || !this.state.amount) {
       this.setState(() => ({ errorState: 'Please provide a description and amount.' }));
     } else {
       this.setState(() => ({ errorState: '' }));
       this.props.onSubmit({
         description: this.state.description,
         amount: parseFloat(this.state.amount, 10) * 100,
         //js display time in ms
         createdAt: this.state.createdAt.valueOf(),
         note: this.state.note
       });
     }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.errorState && <p className="form__error">{this.state.errorState}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  };
}

// autoFocus = when page loads, and you start typing, gets typed in description
