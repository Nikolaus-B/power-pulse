import {
  ListItem,
  Container,
  GreenRound,
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
  Button,
  RedRound,
} from './ProductsList.styled';

import {
  customStyles,
  BasicModalWindow,
} from '../../AddExerciseSuccess/customStylesModal';

import { AddProductForm } from '../../AddProductForm/AddProductForm';
import { AddProductSuccess } from '../../AddProductSuccess/AddProductSuccess';
import { useState } from 'react';
import { Icon } from '../../Icon/Icon';
import { useSelector } from 'react-redux';
import { selectUserBlood } from '../../../redux/products/productsSelectors';

BasicModalWindow.setAppElement('#root');

export const ProductItem = ({ product }) => {
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

  const userBlood = useSelector(selectUserBlood);

  const recommended = userBlood ? product.groupBloodNotAllowed[userBlood]
        ? false
        : true
      : false;

  return (
    <ListItem>
      <Container>
        <HeaderWrapper>
          <DietContainer>
            <DietText>DIET</DietText>
          </DietContainer>
          <RightSideWrapper>
            <RecommendedContainer>
              {recommended ? (
                <RecommendedWrapper>
                  <GreenRound></GreenRound>
                  <Text>Recommended</Text>
                </RecommendedWrapper>
              ) : (
                <RecommendedWrapper>
                  <RedRound></RedRound>
                  <Text>Not recommended</Text>
                </RecommendedWrapper>
              )}
            </RecommendedContainer>
            <Button type="button" onClick={handleOpenModal}>
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
};
