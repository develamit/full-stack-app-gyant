import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App initialContests={window.initialData.cases} />,
  document.getElementById('root')
);



// unmount the component after a set timeout of 4 sec
//setTimeout(() => {
//ReactDOM.render(
//<h2>... unmounted ... </h2>,
//document.getElementById('root')
//);
//}, 4000);
