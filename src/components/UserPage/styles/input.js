import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    color: '#efede8',
    p: '14px',
    borderRadius: '12px',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _placeholder: {
      color: '#efede8',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
});

const variantOutline = definePartsStyle(props => {
  return {
    field: {
      bg: 'inherit',
      border: '1px solid',
      borderColor: 'rgba(239, 237, 232, 0.3)',
      boxShadow: 'none',
      _hover: {
        borderColor: '#e6533c',
      },
      _invalid: {
        borderColor: '#d80027',
        boxShadow: 'none',
      },
      _valid: {
        borderColor: '#3cbf61',
        boxShadow: 'none',
      },
      _focus: {
        borderColor: '#e6533c',
      },
      _focusVisible: {
        border: '1px solid',
        boxShadow: 'none',
        _placeholder: {
          color: '#efede8',
        },
      },
    },
  };
});

const variants = {
  outline: variantOutline,
};

export const inputStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'outline',
  },
});
