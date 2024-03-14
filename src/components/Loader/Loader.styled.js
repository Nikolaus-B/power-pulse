import styled, { keyframes } from 'styled-components';

const shadowPulse = keyframes`
  33% {
    background: #FFF;
    box-shadow: -24px 0 #FF3D00, 24px 0 #FFF;
  }
  66% {
    background: #FF3D00;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  }
  100% {
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #FF3D00;
  }
`;

export const StyledLoader = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  background: #fff;
  box-shadow: -24px 0 #fff, 24px 0 #fff;
  box-sizing: border-box;
  animation: ${shadowPulse} 2s linear infinite;
`;
