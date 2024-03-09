import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --primary-black-color: #040404;
  --orange-color: #E6533C;
  --orange_1-color: #EF8964;
  --beige-color: #EFA082;
  --white-color: #EFEDE8;
  --primary-text-color: #EFEDE8;
   --border-static-color: rgba(239, 237, 232, 0.2);
  --text-info-color: rgba(239, 237, 232, 0.3);
  --text-categories-color:rgba(239, 237, 232, 0.4);
  
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto',
      
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var( --primary-black-color);
  }

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: var(--white-color);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

a {
   color: var(--white-color);
}

button {
  cursor: pointer;
}

div {
     color: var(--white-color);
}

input[type="radio"] {
  display: grid;
  place-content: center;
  appearance: none;
  background-color: #040404;
}


.container {
  margin: 0 auto;
  max-width: 375px;
  padding: 40px 20px 80px 20px;


    @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 768px;
    padding: 72px 32px 78px 32px;

  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 72px 96px 68px 96px;

}
}

`;
