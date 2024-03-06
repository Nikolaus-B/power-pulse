import { extendTheme } from '@chakra-ui/react';
import { containerStyle } from '../styles/container';
import { avatarStyles } from '../styles/avatar';
import { textStyles } from '../styles/text';
import { badgeStyles } from '../styles/badge';
import { boxStyle } from '../styles/box';
import { cardStyles } from '../styles/card';
import { formLabelStyles } from '../styles/formlabel';
import { inputStyles } from '../styles/input';
import { radioStyles } from '../styles/radio';
import { buttonStyles } from '../styles/button';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto, sans-serif',
        bgColor: '#040404',
      },
      'h1, p': {
        m: 0,
        p: 0,
      },
    },
    colors: {
      brand: {
        black: '#040404',
        orange: '#e6533c',
        orange1: '#ef8964',
        beige: '#efa082',
        white: '#efede8',
      },
    },
  },
  breakpoints: {
    base: '0px',
    sm: null,
    md: '768px',
    lg: null,
    xl: '1281px',
    '2xl': '1536px',
  },
  components: {
    Container: containerStyle,
    Avatar: avatarStyles,
    Text: textStyles,
    Badge: badgeStyles,
    Box: boxStyle,
    Card: cardStyles,
    FormLabel: formLabelStyles,
    Input: inputStyles,
    Radio: radioStyles,
    Button: buttonStyles,
  },
});
