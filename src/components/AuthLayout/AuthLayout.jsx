import {
  Container,
  ContainerForm,
  Title,
  Text,
  TextLinkIn,
  StyledLink,
  IconPlay,
  SvgPlay,
  Tutorial,
  TextTutorial,
  Calories,
  IconMan,
  SectionMan,
  TitleMan,
  SpanMan,
  Icon,
  Block,
  IconManSvg,
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
    <Container className="container">
      <ContainerForm>
        <Title>{title}</Title>
        <Text>{paragraph}</Text>

        {children}

        <TextLinkIn>
          {bottomText} <StyledLink to={linkUrl}>{linkName}</StyledLink>
        </TextLinkIn>
      </ContainerForm>

      <IconPlay>
        <Icon>
          <SvgPlay>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </SvgPlay>
        </Icon>

        <Block>
          <Tutorial>
            350+<TextTutorial>Video tutorial</TextTutorial>
          </Tutorial>
        </Block>
      </IconPlay>
      <Calories>
        <IconMan>
          <IconManSvg>
            <use href={`${sprite}#icon-Group`}></use>
          </IconManSvg>
        </IconMan>
        <SectionMan>
          <TitleMan>500</TitleMan>
          <SpanMan>cal</SpanMan>
        </SectionMan>
      </Calories>
    </Container>
  );
};

export default AuthLayout;
