import React from 'react';
import ReactDOM from 'react-dom';
import { ElementsProvider } from '../hooks/useElements';
import Layout from '../Layout';

describe('<Layout />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ElementsProvider><Layout /></ElementsProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});