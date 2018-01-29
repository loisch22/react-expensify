import React from 'react';
import {PracticeCom}  from '../../components/PracticeCom';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render PracticeCom correctly', () => {
  const wrapper = shallow(<PracticeCom />);
  expect(wrapper).toMatchSnapshot();
});

test('should render 0 expenses', () => {
  const wrapper = shallow(<PracticeCom expenseCount={0} expenseTotal={225} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render 1 expense', () => {
  const wrapper = shallow(<PracticeCom expenseCount={1} expenseTotal={125} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses', () => {
  const wrapper = shallow(<PracticeCom expenseCount={4} expenseTotal={8792} />);
  expect(wrapper).toMatchSnapshot();
});
