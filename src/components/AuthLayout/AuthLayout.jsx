import {
  ContainerDiv,
  ContainerForm,
  Title,
  Text,
  TextLinkIn,
  StyledLink,
  Material,
  IconPlay,
  SvgPlay,
  Tutorial,
  TextTutorial,
  Calories,
  IconMan,
  SectionMan,
  TitleMan,
  SpanMan,
} from './AuthLayout.styled';
import sprite from '../../img/sprite.svg';

const AuthLayout = ({
  title,
  paragraph,
  bottomText,
  linkName,
  linkUrl,
  children,
}) => {
  return (
    <ContainerDiv>
      <ContainerForm>
        <Title>{title}</Title>
        <Text>{paragraph}</Text>

        {children}

        <TextLinkIn>
          {bottomText} <StyledLink to={linkUrl}>{linkName}</StyledLink>
        </TextLinkIn>
      </ContainerForm>

      <Material>
        <IconPlay>
          <SvgPlay>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </SvgPlay>

          <Tutorial>
            350+<TextTutorial>Video tutorial</TextTutorial>
          </Tutorial>
        </IconPlay>
        <Calories>
          <IconMan>
            <use href={`${sprite}#icon-Group`}></use>
          </IconMan>
          <SectionMan></SectionMan>
          <TitleMan>
            500 <SpanMan>cal</SpanMan>
          </TitleMan>
        </Calories>
      </Material>
    </ContainerDiv>
  );
};

export default AuthLayout;
