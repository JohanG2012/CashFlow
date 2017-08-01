import styled from 'styled-components';
import colors from '../../constants/colors';

const Input = styled.input`
  display: inline;
  position: relative;
  lineHeight: 100%;
  text-transform: capitalize;
  height: 40px;
  font-size: 16px;
  width: 360px;
  padding: 0;
  border: 3px solid ${colors.gray};
  border-width: 0 0 2px 0;
  margin: 0 0 20px 0;


  &::-webkit-input-placeholder {
    color: ${colors.darkGray};
  }
  &:-moz-placeholder {
    color: ${colors.darkGray};
  }
  &::-moz-placeholder {
    color: ${colors.darkGray};
  }
  &:-ms-input-placeholder {
    color: ${colors.darkGray};
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
