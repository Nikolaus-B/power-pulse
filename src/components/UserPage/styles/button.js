import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const solid = defineStyle({
  border: '1px solid',
  borderRadius: '12px',
  borderColor: '#e6533c',

  color: 'rgba(239, 237, 232, 0.6)',
  fontWeight: 'medium',
  bgColor: '#e6533c',
  transitionProperty: 'common',
  transitionDuration: 'normal',

  _hover: {
    borderColor: '#ef8964',

    color: '#efede8',
    bgColor: '#ef8964',
  },
});

const sizes = defineStyle({
  base: {
    px: '40px',
    py: '12px',

    fontSize: '15px',
    lineHeight: '112%',
  },
  md: {
    px: '50px',
    py: '16px',

    fontSize: '20px',
    lineHeight: '112%',
  },
});

export const buttonStyles = defineStyleConfig({
  sizes,
  variants: { solid },
});
