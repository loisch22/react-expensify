// Higher Order Component (HOC) - A component (hoc) that renders another Component (regular component)
// Goal: reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

//create regular function - pass component as parameter
//common naming for those components = WrappedComponent - capital cuz component name
//pass props = spread operator -> grabs all the props
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin &&   <p>This is private info please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

//with component you want to add
const AdminInfo = withAdminWarning(Info);


ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details." />, document.getElementById('app'));
