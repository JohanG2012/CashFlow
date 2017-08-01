import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const defaultProps = {
  bold: false,
  inline: false,
};

const propTypes = {
  bold: PropTypes.bool,
  inline: PropTypes.bool,
  margin: PropTypes.string.isRequired,
};

const Text = styled.p`
  font-family: ${fonts.primary};
  color: ${colors.gray};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  display: ${props => (props.inline ? 'inline' : 'block')};
  margin: ${props => (props.margin ? props.margin : 0)};
`;

Text.defaultProps = defaultProps;
Text.propTypes = propTypes;

export default Text;
