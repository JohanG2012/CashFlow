import React from 'react';
import { shallow } from 'enzyme';
import FlexBox from '../../../components/FlexBox/';

describe('FlexBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FlexBox />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
