import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store from './Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Store />, div);
  ReactDOM.unmountComponentAtNode(div);
});
