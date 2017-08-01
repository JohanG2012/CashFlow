import React from 'react';
import { shallow } from 'enzyme';
import FormButton from '../../../components/Button/FormButton';

describe('FormButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FormButton />);
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
