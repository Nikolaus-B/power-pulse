import { extendTheme } from '@chakra-ui/react';
import { headingStyles } from '../components/styles/heading';
import { containerStyle } from '../components/styles/container';
import { avatarStyles } from '../components/styles/avatar';
import { textStyles } from '../components/styles/text';
import { badgeStyles } from '../components/styles/badge';
import { boxStyle } from '../components/styles/box';
import { cardStyles } from '../components/styles/card';
import { formLabelStyles } from '../components/styles/formlabel';
import { inputStyles } from '../components/styles/input';
import { formErrorStyles } from '../components/styles/formerror';
import { radioStyles } from '../components/styles/radio';
import { buttonStyles } from '../components/styles/button';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto, sans-serif',
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
    Heading: headingStyles,
    Avatar: avatarStyles,
    Text: textStyles,
    Badge: badgeStyles,
    Box: boxStyle,
    Card: cardStyles,
    FormLabel: formLabelStyles,
    Input: inputStyles,
    FormErrorMessage: formErrorStyles,
    Radio: radioStyles,
    Button: buttonStyles,
  },
});
