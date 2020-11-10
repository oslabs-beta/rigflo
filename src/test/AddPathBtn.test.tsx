import React from 'react';
import ReactDOM from 'react-dom';
import AddPathBtn from '../components/editor/AddPathBtn';

describe('<AddPathBtn />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPathBtn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});