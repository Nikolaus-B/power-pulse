import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  // control: {
  //   borderRadius: '10px',
  //   borderColor: '#636366',
  // },
  label: {
    marginInlineStart: '9px',

    color: '#efedf8',
  },
});

const sizes = {
  base: definePartsStyle({
    control: { w: '18px', h: '18px' },
    label: {
      fontSize: '14px',
      lineHeight: '129%',
    },
  }),
  md: definePartsStyle({
    control: { w: '20px', h: '20px' },
    label: {
      fontSize: '16px',
      lineHeight: '150%',
    },
  }),
};

const variants = {
  groove: definePartsStyle({
    control: {
      bg: 'transparent',
      borderRadius: '10px',
      border: '2px solid #ef8964',
      _checked: {
        color: '#ef8964',
        bg: 'transparent',
        border: '2px solid #ef8964',

        _hover: {
          color: '#ef8964',
          bg: 'transparent',
          border: '2px solid #ef8964',
        },
      },
      _hover: {
        color: '#ef8964',
        bg: 'transparent',
        border: '2px solid #ef8964',
      },
    },
  }),
};

export const radioStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
});
