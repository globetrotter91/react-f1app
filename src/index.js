import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//  Calling the render function of the ReactDom to render the application.
//  The app is rendered in the element with id app -- can be found in public/index.html
ReactDOM.render(<App />, document.getElementById('app'));   //eslint-disable-line
//  service worker can be used to check the current network connectivity 
//  service workers run independent of the application. They only run on https://
registerServiceWorker();
