import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  display: 'flex',
  mx: 0,
  fontWeight: 'normal',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  opacity: 1,
  _disabled: {
    opacity: 0.4,
  },
});

export const formLabelStyles = defineStyleConfig({
  baseStyle,
});
