import React from 'react';
import { ChakraProvider, Container, Stack, VStack } from '@chakra-ui/react';
import { theme } from './mods/Theme';
import { Title } from 'components/Title/Title';
import { UserCard } from './UserCard';
import { UserForm } from './UserForm';
//---------------------------------------

export const ProfilePage = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Container px={{ base: '20px', md: '32px', xl: '96px' }} centerContent>
        <VStack spacing={10} w="100%">
          <Title />
          <Stack
            w={{ xl: '100%' }}
            direction={{ base: 'column', md: 'column', xl: 'row-reverse' }}
            gap={{ base: '18px', md: '38px', xl: '54px' }}
          >
            <UserCard />
            <UserForm />
          </Stack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};
