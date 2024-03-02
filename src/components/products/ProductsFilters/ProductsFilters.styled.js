import styled from 'styled-components';
import BgImg1x from '../../../img/products-1x.jpg'
import BgImg2x from '../../../img/products-2x.jpg'

const PageContainer = styled.div`
@media screen and (min-width: 1440px) {
  max-width: 1632px;
  background-image: url(${BgImg1x});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  height: 716px;

  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url(${BgImg2x});
}
}   



`;

const Container = styled.div`
margin-top: 40px;
margin-bottom: 40px;
padding: 0px 20px;
@media screen and (min-width: 768px) {
    margin-top: 72px;
    padding: 0px 32px;
  }  
@media screen and (min-width: 1440px) {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 96px;
  }   
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
gap: 16px;
max-width: 375px;
margin-top: 40px;
@media screen and (min-width: 768px) {
    max-width: 664px;
    margin: 32px 0px;
    justify-content: flex-start;
    font-size: 16px;
  }  
`;

const Input = styled.input`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 335px;
  background-color: inherit;
  color: white;
  @media screen and (min-width: 768px) {
    max-width: 236px;
  }    
`;

const SelectCategory = styled.select`
  border-radius: 12px;
  padding: 14px;
  width: 146px;
  background-color: inherit;
  color: white;

`;

const SelectLevel = styled.select`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 173px;
  background-color: inherit;
  color: white;
`;

const Option = styled.option`
background: #1c1c1c;
border-radius: 12px;
padding: 14px 32px 14px 14px;

max-height: 228px;
`;

export { PageContainer, Container, Form, Input, SelectCategory, SelectLevel, Option };
