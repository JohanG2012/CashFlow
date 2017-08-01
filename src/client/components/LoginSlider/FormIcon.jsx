import styled from 'styled-components';
import FontAwesome from '../FontAwesome';
import colors from '../../constants/colors';

const FormIcon = styled(FontAwesome)`
  border-bottom: 2px solid ${colors.gray};
  padding 12px;
  color: ${colors.gray};
  float: right;
  width: 16px;
`;

export default FormIcon;
