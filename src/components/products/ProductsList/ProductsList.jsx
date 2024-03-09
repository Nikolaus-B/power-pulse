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
import {
  customStyles,
  BasicModalWindow,
} from '../../AddExerciseSuccess/customStylesModal';

import { AddProductForm } from '../../AddProductForm/AddProductForm';
import { AddProductSuccess } from '../../AddProductSuccess/AddProductSuccess';
import { useState } from 'react';
// BasicModalWindow.setAppElement('#root');

export const ProductsList = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [caloriesAdded, setCaloriesAdded] = useState(0);
  // const [error, setError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);


  const handleOpenModal = () => {
    setIsOpen(true);
  };


  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleCloseSuccess = () => {
    setIsFormVisible(!isFormVisible);
    setIsOpen(false);
  };

  const handleCloseForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleAddProductSuccess = calories => {
    // POST на бек
    setCaloriesAdded(calories);
  };

  const handleAddProductError = errorMessage => {
    // setError(errorMessage);
  };

  const capitalizeFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const recommended = useSelector(selectIsRecommended);
  const recommendedList = recommended.recommendedProducts;
  const isRecommended = products.map((product, index) => {
    if (recommendedList) {
      return recommendedList.some(item => item._id === product._id);
    }
    return [];
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
                  <Button type="button" onClick={handleOpenModal}>
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
            <BasicModalWindow
              isOpen={isOpen}
              onRequestClose={handleCloseModal}
              style={customStyles}
              contentLabel="Add Product Modal"
            >
              {isFormVisible ? (
                <AddProductForm
                  product={product}
                  onClose={handleCloseModal}
                  onCloseForm={handleCloseForm}
                  onSuccess={handleAddProductSuccess}
                  onError={handleAddProductError}
                />
              ) : (
                <AddProductSuccess
                  isSuccessOpen={true}
                  onClose={handleCloseSuccess}
                  onCloseSuccess={handleCloseForm}
                  caloriesAdded={caloriesAdded}
                />
              )}
            </BasicModalWindow>
          </ListItem>
        );
      })}
    </List>
  );
};
