import styled from 'styled-components';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const defaultProps = {
  primary: false,
};

const propTypes = {
  primary: PropTypes.bool,
};

const RegularButton = styled.button`
  font-family: ${fonts.primary};
  text-transform: uppercase;
  width: 150px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0;
  height: 40px;
  ${props => (
    props.primary
      ? null
      : `
    color: ${colors.gray};
    border: 2px solid ${rgba(colors.gray, 0.8)};
    background: ${rgba(colors.primary, 0.8)};
    `
  )}
  &:focus {
    outline: none;
  }
`;

RegularButton.defaultProps = defaultProps;
RegularButton.propTypes = propTypes;

export default RegularButton;
