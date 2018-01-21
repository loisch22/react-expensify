import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

// enzyme = renderer more full-featured
// react-test-renderer doesn't have many features so can't test complex things

test('should render Header correctly', () => {
  // shallow render header by length
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').text()).toBe('Expensify');

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
