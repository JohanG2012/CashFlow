import React, { Component } from 'react';
import SubTitle from '../SubTitle/';
import FormIcon from './FormIcon';
import SliderContainer from './SliderContainer';
import TextInput from '../TextInput/';
import Button from '../Button/';
import FlexBox from '../FlexBox';

class Register extends Component {
  render() {
    return (
      <SliderContainer>
        <SubTitle uppercase primary>sign up</SubTitle>
        <form>
          <TextInput placeholder="email" />
          <FormIcon icon="envelope" />
          <TextInput placeholder="password" />
          <FormIcon icon="lock" />
          <FlexBox height="100px" justifyContent="flex-end" alignItems="flex-end">
            <Button primary form>sign up</Button>
          </FlexBox>
        </form>
      </SliderContainer>
    );
  }
}

export default Register;
