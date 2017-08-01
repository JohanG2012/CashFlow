import React from 'react';
import { render } from 'enzyme';
import { LoginSlider } from '../../../components/LoginSlider/';

describe('LoginSlider', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<LoginSlider />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
