import React from 'react';
import ReactDOM from 'react-dom';
import MethodSelect from '../components/editor/MethodSelect';

describe('<MethodSelect />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MethodSelect />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});