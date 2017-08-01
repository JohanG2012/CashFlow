import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../../components/LoginSlider/Register';

describe('Register', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
