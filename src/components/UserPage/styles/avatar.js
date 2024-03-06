import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const container = defineStyle({
  w: '90px',
  h: '90px',
  border: '1px solid #e6533c',

  bg: 'rgba(48, 48, 48, 0.3)',
});

export const avatarStyles = defineStyleConfig({
  baseStyle: {
    container,
  },
});
