import styled from 'styled-components';
import bg from '../../assets/bg.jpg';

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:before {
    background-image: url(${bg});
    content: "";
    position: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    width: 100%;
    height: 100%;

    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
`;

export default Background;
