import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../../components/LoginSlider/Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
