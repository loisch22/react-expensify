// configure environment we're running tests in
// wire enzyme to work with adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// single method to configure everything
Enzyme.configure({
  adaptor: new Adapter()
});
