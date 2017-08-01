import styled from 'styled-components';
import { rgba } from 'polished';
import colors from '../../constants/colors';

const Container = styled.div`
  background: ${rgba(colors.primary, 0.8)};
  height: 300px;
  width: 950px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  padding: 50px;
  align-items: center;
`;

export default Container;
