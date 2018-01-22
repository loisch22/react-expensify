import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  // currently copies all sorts of "junk" we don't want
  // only want to render component so google enzyme-to-json github to get json back
  expect(wrapper).toMatchSnapshot();

  //expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
