import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  // currently copies all sorts of "junk" we don't want
  // only want to render component so google enzyme-to-json github to get json back
  expect(toJson(wrapper)).toMatchSnapshot();

  //expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
