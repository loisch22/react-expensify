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
    {props.isAdmin && <p>This is from admin</p>}
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin &&   <p>This is private info please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuth ?
        (<WrappedComponent {...props}/>) : (<p>Please log in to view this info.</p>) }
    </div>
  );
};

//with component you want to add
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="These are the details." />, document.getElementById('app'));
