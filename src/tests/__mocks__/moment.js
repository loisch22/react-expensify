// uses real moment not the test file moment
const moment = require.requireActual('moment');

// if timestamp exists pass that if not set to 0
export default (timestamp = 0) => {
  return moment(timestamp);
};
