import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import React from 'react';

test('should render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={0} expenseTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with a single expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={43523}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={5} expenseTotal={23523}/>);
  expect(wrapper).toMatchSnapshot();
});
