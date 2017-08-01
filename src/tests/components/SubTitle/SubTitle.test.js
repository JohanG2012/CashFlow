import React from 'react';
import { shallow } from 'enzyme';
import SubTitle from '../../../components/SubTitle/';

describe('RegularButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SubTitle />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
