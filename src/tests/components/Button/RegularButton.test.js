import React from 'react';
import { shallow } from 'enzyme';
import RegularButton from '../../../components/Button/RegularButton';

describe('RegularButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RegularButton />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
