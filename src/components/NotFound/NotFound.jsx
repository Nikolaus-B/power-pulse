import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ErrorBox,
  BoxContent,
  Title404,
  Text404,
  Svg,
  StyledLink,
  Button,
  Section,
  Body,
} from '../../components/NotFound/notFound.styled';
import { Icon } from 'components/Icon/Icon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Body>
      <Section>
        <StyledLink to="/">
          <Svg>
            <Icon iconid={'white-logo'} />
          </Svg>
        </StyledLink>
        <ErrorBox>
          <BoxContent>
            <Title404>404</Title404>
            <Text404>
              Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
            </Text404>
            <Button className="Button" type="button" onClick={handleClick}>
              Go Home
            </Button>
          </BoxContent>
        </ErrorBox>
      </Section>
    </Body>
  );
};

export default NotFound;
