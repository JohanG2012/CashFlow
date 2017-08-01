import styled from 'styled-components';
import PropTypes from 'prop-types';

const defaultProps = {
  right: false,
};

const propTypes = {
  right: PropTypes.bool,
};

const ContentSlider = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid lightgrey;
  height: 500px;
  width: 500px;
  z-index: 10;
  position: absolute;
  opacity: 2;
  -webkit-box-shadow: 6px -7px 12px -2px rgba(92,92,92,1);
  -moz-box-shadow: 6px -7px 12px -2px rgba(92,92,92,1);
  box-shadow: 6px -7px 12px -2px rgba(92,92,92,1);
  ${
  props => (props.right
    ? `
    animation: moveRight 0.75s;
    right: 70px;
    `
    : `
    animation: moveLeft 0.75s;
    right: 500px;
    `)
}

  @keyframes moveRight {
    0% { right: 500px;}
    40% { right: 0px;}
    60% { right: 90px;}
    80% { right: 50px;}
    100% { right: 70px;}
  }

  @keyframes moveLeft {
    0% { right: 70px;}
    40% { right: 550px;}
    60% { right: 480px;}
    80% { right: 520px;}
    100% { right: 500px;}
  }
`;

ContentSlider.defaultProps = defaultProps;
ContentSlider.propTypes = propTypes;

export default ContentSlider;
