import {
  List,
  ListItem,
  Container,
  GreenRound,
  RedRound,
  DietContainer,
  MainContainer,
  RecommendedContainer,
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
  Button,
} from './ProductsList.styled';
import { Icon } from 'components/Icon/Icon';
import { useSelector } from 'react-redux';
import { selectIsRecommended } from '../../../redux/products/productsSelectors';

export const ProductsList = ({ products }) => {
  const capitalizeFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const recommended = useSelector(selectIsRecommended);
  const recommendedList = recommended.recommendedProducts;
  const isRecommended = products.map((product, index) => {
    if (recommendedList) {
      return recommendedList.some(item => item._id === product._id);
    }
  });

  return (
    <List>
      {products.map((product, index) => {
        return (
          <ListItem key={product._id}>
            <Container>
              <HeaderWrapper>
                <DietContainer>
                  <DietText>DIET</DietText>
                </DietContainer>
                <RightSideWrapper>
                  <RecommendedContainer>
                    {isRecommended[index] ? (
                      <RecommendedWrapper>
                        <GreenRound></GreenRound>
                        <Text>Recommended</Text>
                      </RecommendedWrapper>
                    ) : (
                      <NotRecommendedWrapper>
                        <RedRound></RedRound>
                        <Text>Not recommended</Text>
                      </NotRecommendedWrapper>
                    )}
                  </RecommendedContainer>
                  <Button type="button">
                    {' '}
                    Add
                    <div style={{ paddingTop: '4px', marginLeft: '8px' }}>
                      <Icon iconid={'arrow'} width={16} height={16} />
                    </div>
                  </Button>
                </RightSideWrapper>
              </HeaderWrapper>
              <MainContainer>
                <TitleWrapper>
                  <Icon iconid={'circle-running-man'} width={24} height={24} />
                  <TitleText>{capitalizeFirstLetter(product.title)}</TitleText>
                </TitleWrapper>
                <InfoWrapper>
                  <Text>
                    <DarkText>Calories: </DarkText>
                    {product.calories}
                  </Text>
                  <Text>
                    <DarkText>Category: </DarkText>
                    {capitalizeFirstLetter(product.category)}
                  </Text>
                  <Text>
                    <DarkText>Weight: </DarkText>
                    {product.weight}
                  </Text>
                </InfoWrapper>
              </MainContainer>
            </Container>
          </ListItem>
        );
      })}
    </List>
  );
};
