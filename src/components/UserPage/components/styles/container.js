import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: '100%',
  h: '100%',
  mx: 'auto',
  minW: '375px',
  maxW: '1440px',
  // minH: '100vh',
  px: '5',
  py: '10',

  bgColor: '#040404',
});

export const containerStyle = defineStyleConfig({
  baseStyle,
});
