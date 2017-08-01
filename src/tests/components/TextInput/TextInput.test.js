import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../../../components/TextInput/';

describe('TextInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextInput />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
