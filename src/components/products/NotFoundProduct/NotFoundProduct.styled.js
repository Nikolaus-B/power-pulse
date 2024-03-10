import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 64px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    margin-top: 132px;
    max-width: 580px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 136px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 129%;
  color: var(--text-info-color);
`;

const AccentText = styled.span`
  color: var(--orange-color);
`;

export { Wrapper, Text, AccentText };
