import styled from 'styled-components';
import PropTypes from 'prop-types';

const defaultProps = {
  column: false,
};

const propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  column: PropTypes.bool,
  alignItems: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
};

const FlexBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

FlexBox.defaultProps = defaultProps;
FlexBox.propTypes = propTypes;

export default FlexBox;
