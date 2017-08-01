import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BackgroundSidebar from './components/BackgroundSidebar/';
import TopBar from './TopBar';
import slideToSidebar from './actions/slideToSidebar';

const propTypes = {
  slide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const LoginPage = ({ slide, onClick }) => (
  <div style={{ height: '100%' }}>
    <TopBar slide={slide}>
      <h2 style={{ textAlign: 'center', margin: 0 }}>test</h2>
    </TopBar>
    <BackgroundSidebar slide={slide}>
      <button onClick={onClick}> hello world</button>
    </BackgroundSidebar>
  </div>
);

const mapStateToProps = state => ({
  slide: state.backgroundSidebar.slide,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(slideToSidebar()),
});

LoginPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
