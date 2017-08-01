import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../constants/colors';

const defaultProps = {
  slide: false,
};

const propTypes = {
  slide: PropTypes.bool,
};

const BackgroundSidebar = styled.div`
  width: ${props => (props.slide ? '200px' : '100%')};
  height: 100%;
  background: ${colors.primary};
  transition: width 1s;
`;

export default BackgroundSidebar;

BackgroundSidebar.defaultProps = defaultProps;
BackgroundSidebar.propTypes = propTypes;
