import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  display: 'flex',
  alignContent: 'baseline',
  alignItems: 'flex-start',

  mx: 0,
  fontWeight: 'normal',
  fontSize: 'inherit',
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
