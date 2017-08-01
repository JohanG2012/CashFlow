import React from 'react';
import { shallow } from 'enzyme';
import BackgroundSidebar from '../../../components/BackgroundSidebar/';

describe('Background', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BackgroundSidebar />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
