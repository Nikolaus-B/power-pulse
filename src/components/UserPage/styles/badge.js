import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  bgColor: 'transparent',

  fontWeight: 'normal',
  textAlign: 'center',
  textTransform: 'none',
  color: 'rgba(239, 237, 232, 0.5)',
});

export const badgeStyles = defineStyleConfig({
  baseStyle,
});
