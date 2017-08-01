import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './Container';
import FlexBox from '../FlexBox/';
import SubTitle from '../SubTitle/';
import Text from '../Text/';
import Button from '../Button/';
import ContentSlider from './ContentSlider';
import Login from './Login';
import Register from './Register';
import slide from '../../actions/slide';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  right: PropTypes.bool.isRequired,
};

const LoginSlider = ({ onClick, right }) => (
  <Container>
    <FlexBox width="400px" justifyContent="space-end" column>
      <SubTitle noMargin>Don&lsquo;t Have an <br /> account?</SubTitle>
      <Text margin="0 0 32px">Banjo tote bag bicycle rights. High Life sentorial cray craft beer whatever street art fap.</Text>
      <Button onClick={onClick}>sign up</Button>
    </FlexBox>
    <FlexBox width="400px" justifyContent="space-end" column>
      <SubTitle>Have an account?</SubTitle>
      <Text margin="0 0 32px">Banjo tote bag bicycle rights. High Life sentorial cray craft beer whatever street art fap.</Text>
      <Button onClick={onClick}>login</Button>
    </FlexBox>
    <ContentSlider right={right}>
      {
        right
          ? <Login />
          : <Register />
      }
    </ContentSlider>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(slide()),
});

const mapStateToProps = state => ({
  right: state.loginSlide.right,
});

LoginSlider.propTypes = propTypes;

export { LoginSlider };
export default connect(mapStateToProps, mapDispatchToProps)(LoginSlider);
