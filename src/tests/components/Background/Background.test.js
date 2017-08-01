import React from 'react';
import { shallow } from 'enzyme';
import Background from '../../../components/Background/';

describe('Background', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Background />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
