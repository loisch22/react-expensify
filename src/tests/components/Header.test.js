import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';

// use ReactShallowRenderer to render header
test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  // return rendered output of jsx you put in
  // snapshot allow us to keep track of changes - notified when changes are made
  // method from jest toMatchSnapshot does the above
  // always passes first time, toMathSnapshot creates copy of renderer.getRenderOutput to compare - run second time, compare existing Header rendered component
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
