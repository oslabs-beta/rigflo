import React from 'react';
import ReactDOM from 'react-dom';
import Description from '../components/editor/Description';

describe('<Description />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Description />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});