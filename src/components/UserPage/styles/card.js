import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  container: {
    p: '14px',
    border: '1px solid rgba(239, 237, 232, 0.2)',
    borderRadius: '12px',

    bgColor: '#e6533c',
    boxShadow: 'none',
  },
  header: {
    p: 0,

    fontSize: '12px',
  },
  footer: {
    p: 0,

    fontSize: { base: '18px', md: '24px' },
  },
});

export const cardStyles = defineStyleConfig({
  baseStyle,
  variants: 'unstyled',
});
