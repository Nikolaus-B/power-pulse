import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  width: '100%',

  fontFamily: 'inherit',
  color: '#efede8',
});

export const headingStyles = defineStyleConfig({
  baseStyle,
});
