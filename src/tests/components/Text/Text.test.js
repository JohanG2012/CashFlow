import React from 'react';
import { shallow } from 'enzyme';
import Text from '../../../components/Text/';

describe('Text', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Text />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
