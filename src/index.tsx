
// import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import Index from './containers/index';
// import { store } from './store/index';
// import { Provider } from 'react-redux';
import Router from './router/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  Router,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
