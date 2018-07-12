import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Store from './Store';


ReactDOM.render(
  <Store />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
