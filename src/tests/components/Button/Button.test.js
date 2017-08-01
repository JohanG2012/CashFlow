import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/Button/';
import FormButton from '../../../components/Button/FormButton';
import RegularButton from '../../../components/Button/RegularButton';

describe('Button', () => {
  let wrapper;

  describe('without props', () => {
    beforeEach(() => {
      wrapper = shallow(<Button>submit</Button>);
    });

    it('should be defined', () => {
      expect(wrapper).toBeDefined();
    });

    it('should render RegularButton-component', () => {
      expect(wrapper.find(RegularButton).length).toBeGreaterThan(0);
    });
  });

  describe('with form prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Button form>submit</Button>);
    });

    it('should render FormButton-component', () => {
      expect(wrapper.find(FormButton).length).toBeGreaterThan(0);
    });
  });
});
