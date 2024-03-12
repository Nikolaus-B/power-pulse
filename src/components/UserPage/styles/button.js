import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = defineStyle({
  base: {
    minWidth: '32px',
    px: '40px',
    py: '12px',

    fontSize: '15px',
    lineHeight: '112%',
  },
  md: {
    minWidth: '32px',
    px: '50px',
    py: '16px',

    fontSize: '20px',
    lineHeight: '112%',
  },
});

const variantSolid = defineStyle({
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

const variantUnstyled = defineStyle({
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  fontWeight: 'normal',
  w: '32px',
  h: 'auto',
  m: '0',
  pr: '30px',
});

const variants = {
  solid: variantSolid,
  unstyled: variantUnstyled,
};

export const buttonStyles = defineStyleConfig({
  sizes,
  variants,
});
