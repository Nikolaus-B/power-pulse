import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Left,
  Content,
  Title404,
  Text404,
  Svg,
  StyledLink,
  Button,
  Container,
} from '../../components/NotFound/notFound.styled';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container className="container">
      <StyledLink to="/">
        <Svg>{/* < /> */}</Svg>
      </StyledLink>
      <Left>
        <Content>
          <Title404>404</Title404>
          <Text404>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text404>
          <Button className="Button" type="button" onClick={handleClick}>
            Go Home
          </Button>
        </Content>
      </Left>
    </Container>
  );
};

export default NotFound;
