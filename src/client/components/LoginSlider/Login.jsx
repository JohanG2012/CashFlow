import React from 'react';
import SliderContainer from './SliderContainer';
import FormIcon from './FormIcon';
import Button from '../Button';
import TextInput from '../TextInput';
import SubTitle from '../SubTitle';
import FlexBox from '../FlexBox';

const Login = () => (
  <SliderContainer>
    <SubTitle uppercase primary>login</SubTitle>
    <form>
      <TextInput placeholder="email" />
      <FormIcon icon="envelope" />
      <TextInput placeholder="password" />
      <FormIcon icon="lock" />
      <FlexBox height="100px" justifyContent="flex-end" alignItems="flex-end">
        <Button primary form>login</Button>
      </FlexBox>
    </form>
  </SliderContainer>
);

export default Login;
