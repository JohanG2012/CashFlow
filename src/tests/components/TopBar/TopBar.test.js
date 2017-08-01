import React from 'react';
import { shallow } from 'enzyme';
import TopBar from '../../../components/TopBar/';

describe('TopBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TopBar />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
