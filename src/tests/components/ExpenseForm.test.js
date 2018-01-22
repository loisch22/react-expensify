import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

// test fails due to moment() returning diff time each test
// manual mock moment data - jest docs
test('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  // need to fake preventDefault
  // simulate event for submiting form - find form by element name
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  // get length of error state, length should be > 0
  expect(wrapper.state('errorState').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
