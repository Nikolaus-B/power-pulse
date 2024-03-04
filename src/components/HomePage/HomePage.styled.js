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
export const VideoTutorialButton = styled.button`
  border-radius: 12px;
width: 146px;
height: 66px;
background: #303030;
`;

// Стилі для блоку трекера спалених калорій
export const CaloriesInfo = styled.div`
  border-radius: 12px;
width: 119px;
height: 76px;
background: var(--orange_1-color);
`;

// Стилі для зображення калорійного вогнику
export const CaloriesIcon = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
`;

// Стилі для кількості спалених калорій
export const CaloriesText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

// Основний контейнер сторінки
export const Container = styled.div`
  /* padding-top: 90px;
  padding: 20px; */
`;

// Стилі для секцій сторінки
export const Section = styled.section`
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

`;

// Стилі для блоку зображення відео
export const VideoIcon = styled.img`
  width: 40px;
  height: auto;
  margin-right: 10px;
`;

// Стилі для секції з відео туторіалом
export const VideoTutorialSection = styled(Section)`
  width: 146px;
height: 66px;
`;

// Стилі для секції з калоріями
export const CaloriesTrackerSection = styled(Section)`
  background-color: #f8f9fa;
  width: 119px;
height: 76px;
`;

// Стилі для компоненту UserImage
export const UserImage = styled.div`
  width: 446px;
height: 669px;
`;

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
  /* Ваші стилі для компоненту MainContent */
`;