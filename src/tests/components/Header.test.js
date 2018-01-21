import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';

// enzyme = renderer more full-featured
// react-test-renderer doesn't have many features so can't test complex things

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
