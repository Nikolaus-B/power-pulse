import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    max-width: calc(335px * 2 + 16px + 12px + 32px + 8px);
    max-height: 660px;
    overflow-y: scroll;
    scrollbar-color: var(--orange_1-color);
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--orange_1-color);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }
  }
  @media screen and (min-width: 1440px) {
    max-height: 487px;
    max-width: calc(405px * 2 + 16px * 2 + 8px);
  }
`;

const ListItem = styled.li``;

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
  background-color: rgba(239, 237, 232, 0.05);
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

const RecommendedContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RecommendedWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const NotRecommendedWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const GreenRound = styled.div`
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: #419b09;
`;

const RedRound = styled.div`
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: #e9101d;
`;

const Text = styled.p`
  font-size: 12px;
  color: var(--white-color);
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

const MainContainer = styled.div``;

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
  GreenRound,
  RedRound,
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
  NotRecommendedWrapper,
  RecommendedContainer,
  Button,
};
