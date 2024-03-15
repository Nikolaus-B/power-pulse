import styled from 'styled-components';
import BgImg1x from '../../img/exercises-1x.jpg';
import BgImg2x from '../../img/exercises-2x.jpg';

export const PageContainer = styled.div`
    position: relative; 
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 716px;
    background-image: url(${BgImg1x});
    background-repeat: no-repeat;
    background-position: 963px top;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgImg2x});
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text-categories-color);
  line-height: 1.29;
  padding: 0;

  position: absolute;
  top: 10px;

  @media screen and (min-width: 768px) {
    top: 32px;
  }
`;

export const Svg = styled.span`
  margin-right: 5px;
  padding: 0;
  align-items: center;
  fill: rgba(239, 237, 232, 0.4);
`;

export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


