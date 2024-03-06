import { Heading } from '@chakra-ui/react';

export const TitlePage = () => {
  return (
    <Heading
      as="h1"
      fontSize={{ base: '24px', md: '32px' }}
      lineHeight={{ base: '117%', md: '137%' }}
    >
      Profile settings
    </Heading>
  );
};
