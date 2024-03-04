import styled from 'styled-components';

// Стилі для заголовка головної секції
export const HeroTitle = styled.h1`
width: 335px;
height: 120px;
  margin-bottom: 40px;
font-weight: 500;
font-size: 38px;
line-height: 105%;
letter-spacing: 0.01em;
color: var(--white);
`;

// export const NavLink = styled.button`
// border-radius: 12px;
// padding: 12px 40px;
// width: 136px;
// height: 42px;
// color: var(--white-color);
// margin-right: 14px;
// background-color: var(--orange-color);
// font-weight: 500;
// font-size: 16px;
// line-height: 112%;
// `;


// Стилі для кнопок "Sign Up" і "Sign In"
export const CTAButton = styled.button`
border: 1px solid var(--orange-color);
border-radius: 12px;
width: 136px;
height: 42px;
color: var(--white-color);
margin-right: 14px;
background-color: var(--orange-color);
font-weight: 500;
font-size: 16px;
line-height: 112%;
/* Стилі для ховер ефекту */
  &:hover {
    background-color: var(--orange_1-color);
    border: 1px solid var(--orange_1-color);
  }
  
  /* Стилі для фокусу */
  &:focus {
    background-color: var(--orange_1-color);
    border: 1px solid var(--orange_1-color);
  }
`;

// Стилі для блоку з відео туторіалом


// Стилі для блоку трекера спалених калорій
export const CaloriesInfo = styled.div`
background: var(--orange_1-color);

`;

// Стилі для зображення калорійного вогнику
export const CaloriesIcon = styled.svg`
  border-radius: 100%;
color: var(--beige-color);
width: 12px;
height: 12px;
margin-top: 18px;
margin-left: 22px;
margin-bottom: 8px;
`;

// Стилі для кількості спалених калорій
export const CaloriesText = styled.span`
margin-right: 8px;
font-weight: 700;
font-size: 24px;
line-height: 100%;
letter-spacing: -0.04em;
text-transform: uppercase;
color: var(--white-color);
`;

export const Text = styled.span`
  font-family: var(--font-family);
font-weight: 700;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.65);
`;

// Основний контейнер сторінки
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /*   */
`;

// Стилі для компоненту UserImage
export const UserImage = styled.img`
  width: 100%; /* Або встановіть бажаний розмір */
  height: auto;
`;

// Стилі для секцій сторінки
export const Section = styled.section`
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

`;

// Стилі для секції з відео туторіалом
export const VideoTutorialSection = styled.div`
border-radius: 12px;
width: 146px;
height: 66px;
background: #303030;
display: flex;
/* margin-bottom: 284px; */
/* margin-left: 44px; */
`;

export const SectionVideo = styled.div`
  padding-top: 14px;
  padding-bottom: 14px;
  /* padding-right: 18px; */
`;
export const VideoIcon = styled.svg`
  border-radius: 100%;
color: var(--orange_1-color);
  width: 30px;
  height: 30px;
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 18px;
  margin-right: 4px;
`;

export const Video = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 112%;
color: var(--white-color);
`;

export const VideoTutorialButton = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.65);
`;

export const CaloriesTrackerSection = styled.div`
  border-radius: 12px;
 width: 119px;
height: 76px;
background: var(--orange_1-color);
/* display: flex; */

`;

// Стилі для компоненту UserImage
// export const UserImage = styled.img`
//   width: 100%; /* Або встановіть бажаний розмір */
//   height: auto;
// `;


// ............................................

// Стилі для кнопки "Sign In"
export const SignInButton = styled.button`
border: 1px solid rgba(239, 237, 232, 0.3);
border-radius: 12px;
width: 136px;
height: 42px;
color: var(--white-color);
background-color: var(--primary-black-color);
/* Стилі для ховер ефекту */
  &:hover {
    border: 1px solid var(--orange_1-color);
  }
  
  /* Стилі для фокусу */
  &:focus {
    border: 1px solid var(--orange_1-color);
  }
`;



export const Actions = styled.div`
  display: flex;
  gap: 14px;
`;
export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const TutorialText = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: rgba(239, 237, 232, 0.65);
`;
export const StatText = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  color: var(--white);
`;
export const CircleSVG = styled.svg`
  fill: var(--orange-1);
`;
export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const PromoTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 38px;
  line-height: 105%;
  letter-spacing: 0.01em;
  color: var(--white);
`;
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const FotoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */
  background-image : url('../../../img/hero-mobile-1x.jpg');
  padding-left: 77px;
`;
