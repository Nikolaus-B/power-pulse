import styled from 'styled-components';

const List = styled.ul`
padding: 0px 20px;
display: flex;
flex-direction: column;
gap: 20px;
@media screen and (min-width: 768px) {
  height: 660px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--orange_1-color); 
    border-radius: 12px;
  }
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    max-width: 766px;
    max-height: 500px;
    padding: 0px 32px;
  }  
@media screen and (min-width: 1440px) {
  height: 487px;
    max-width: 1042px;
    padding: 0px 96px;
  } 
`;

const ListItem = styled.li`

`;

const Container = styled.div`
border: 1px solid rgba(239, 237, 232, 0.2);
border-radius: 12px;
padding: 16px;
width: 335px;

background-color: rgba(239, 237, 232, 0.05);
@media screen and (min-width: 1440px) {
    min-width: 405px;
}   
`;

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 35px;
`;

const DietContainer = styled.div`
border-radius: 4px;
padding: 5px 7px;
width: 41px;
height: 24px;
background-color: var(--border-static-color);
`;

const DietText = styled.p`
font-weight: 700;
font-size: 12px;
color: #fff;
`;

const RightSideWrapper = styled.div`
display: flex;
gap: 16px;
`;

const RecommendedWrapper = styled.div`
display: flex;
gap: 8px;
align-items: center;
`;

const ColorRound = styled.div`
border-radius: 10px;
width: 14px;
height: 14px;
background-color: #419b09;
`;

const Text = styled.p`
font-size: 12px;
color: var(--white-color);
text-transform:capitalize;
max-width: 122px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const Button = styled.button`
display: flex; 
align-items: center;
width: 49px;
height: 18px;
padding: 0px;
background-color: inherit;
border: none;
font-size: 14px;
color: var(--orange-color);
`;

const MainContainer = styled.div`

`;

const TitleWrapper = styled.div`
display: flex;
margin-bottom: 8px;
`;

const TitleText = styled.p`
font-size: 20px;
color: var(--white-color);
margin-left: 16px;
max-width: 258px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform:capitalize;
`;

const InfoWrapper = styled.div`
display: flex;
gap: 16px;
`;

const DarkText = styled.span`
color: rgba(239, 237, 232, 0.4);
`;

export {
    List,
    ListItem,
    Container,
    ColorRound,
    DietContainer,
    MainContainer,
    Text,
    TitleText,
    TitleWrapper,
    DarkText,
    DietText,
    InfoWrapper,
    HeaderWrapper,
    RightSideWrapper,
    RecommendedWrapper,
    Button
}