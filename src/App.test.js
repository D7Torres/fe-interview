import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('renders without crashing', () => {});
});
