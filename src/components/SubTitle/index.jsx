import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const defaultProps = {
  noMargin: false,
  primary: false,
  uppercase: false,
};

const propTypes = {
  noMargin: PropTypes.bool,
  primary: PropTypes.bool,
  uppercase: PropTypes.bool,
};


const SubTitle = styled.h2`
    margin: ${props => (props.noMargin ? 0 : '20px 0 20px 0')};
    color: ${props => (props.primary ? colors.red : colors.gray)};
    font-family: ${fonts.primary};
    ${props => (
    props.uppercase
      ? `
    text-transform: uppercase;
    `
      : null
  )}
`;

SubTitle.defaultProps = defaultProps;
SubTitle.propTypes = propTypes;

export default SubTitle;
