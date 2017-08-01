import styled from 'styled-components';
import colors from '../../constants/colors';

const TopBar = styled.div`
  top: ${props => (props.slide ? '0' : '-52px')};
  background: ${colors.secondary};
  border-bottom: 1px solid ${colors.third};
  z-index: 10;
  transition: top 1s;
  transition-delay: 0.5s;
  position: absolute;
  width: 100%;
  height: 50px;
`;

export default TopBar;
