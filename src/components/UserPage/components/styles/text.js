import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  fontFamily: 'inherit',
  fontWeight: 'normal',
  color: '#efede8',
});

export const textStyles = defineStyleConfig({
  baseStyle,
});
