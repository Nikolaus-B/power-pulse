import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: '100%',

  fontFamily: 'inherit',
  fontWeight: 'bold',
  color: '#efede8',
});

export const headingStyles = defineStyleConfig({
  baseStyle,
});
