import styled from 'styled-components';

const Container = styled.div`
margin-top: 40px;
padding: 0px 20px;
@media (min-width: 768px) {
    margin-top: 72px;
    padding: 0px 32px;
  }  
@media (min-width: 1440px) {
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
@media (min-width: 768px) {
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
  @media (min-width: 768px) {
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

export { Container, Form, Input, SelectCategory, SelectLevel, Option };
