import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calories, IconPlay } from '../components/AuthLayout/AuthLayout.styled';
import { 
  Container, 
  HeroTitle, 
  CTAButton, 
  VideoTutorialButton, 
  CaloriesInfo, 
  CaloriesIcon, 
  CaloriesText,
  Text,
  Section, 
  VideoIcon, 
  Video,
  SectionVideo,
  SignInButton,
  FotoSection,
} from '../components/HomePage/HomePage.styled'; 
import { Icon } from '../components/Icon/Icon';
const HomePage = ({
  title,
  paragraph,
  bottomText,
  linkName,
  linkUrl,
  children,
}) => {
  return (
    <>
      
      <Container>
        <Section>
          <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
          <div className="cta-buttons">
            <NavLink to="/register"><CTAButton>Sign Up</CTAButton></NavLink>
            <NavLink to="/login"><SignInButton>Sign In</SignInButton></NavLink>
          </div>
        </Section>
        

         
        {/* <img src={img} alt="Woman exercising" />  */}
        <FotoSection>
        <IconPlay>
        <VideoIcon>
          <Icon width={12} height={12} iconid={'play-log'}/>
        </VideoIcon>

        <SectionVideo>
          <Video>
            350+<VideoTutorialButton>Video tutorial</VideoTutorialButton>
          </Video>
        </SectionVideo>
      </IconPlay>

        <Calories>
        <CaloriesIcon>
          <Icon iconid={'circle-running-man'}/>
        </CaloriesIcon>
        <CaloriesInfo>
          <CaloriesText>500</CaloriesText>
          <Text>cal</Text>
        </CaloriesInfo>
      </Calories>
        </FotoSection>
        {/* <FotoContainer>
        <source
          srcSet="../img/hero-1x.jpg 1x, ../img/hero-2x.jpg 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="../img/hero-tablet-1x.jpg 1x, ../img/hero-tablet-2x.jpg 2x"
          media="(min-width: 768px)"
        />
        <source
          srcSet="../img/hero-mobile-1x.jpg 1x, ../img/hero-mobile-2x.jpg 2x"
          media="(max-width: 767px)"
        />

        <Foto src="../img/hero-1x.jpg" alt="woman" />
      
        </FotoContainer> */}
      </Container>
    </>
  );
}

export default HomePage;
