import React from 'react';
import { shallow } from 'enzyme';
import FontAwesome from '../../../components/FontAwesome/';

describe('FontAwesome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FontAwesome />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
