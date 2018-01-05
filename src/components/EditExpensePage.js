import React from 'react';

//props have LOTS of properties
//History - has properties listed that I can manipulate where the user is via js
//Match - params object - tells why current url is a match
//Location - info about current url - as we add hash values/query strings it'll show in location
//query string - /edit?query=rent&sort=date -- filter data search query and sort by date thats key=value pairs -- under location, search: contains query info
//Hash - /edit#contact-us -- scroll down to part of page with id of contact-us and shows up in console under location, hash: "#contact-us"
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is from my edit expense page
    </div>
  );
};

export default EditExpensePage;
