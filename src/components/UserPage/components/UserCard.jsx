import {
  Avatar,
  Badge,
  Button,
  Card,
  CardFooter,
  CardHeader,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import sprite from '../../../img/pulse-icons.svg';

export const UserCard = () => {
  return (
    <Stack>
      <VStack spacing={{ base: '40px', md: '32px' }}>
        <VStack spacing="32px">
          <VStack>
            <Avatar
              icon={
                <Icon
                  icon={`${sprite}$#{avatar}`}
                  color="rgba(239, 237, 232, 0.1)"
                  fontSize="61px"
                />
              }
              pos="relative"
              w={{ base: '90px', md: '150px' }}
              h={{ base: '90px', md: '150px' }}
            >
              <Button
                pos="absolute"
                right={{ base: '16px', md: '50px' }}
                bottom={{ base: '-12px', md: '-16px' }}
                h="auto"
                p="0"
                variant="unstyled"
              >
                <Image
                  icon={`${sprite}$#{add-avatar}`}
                  boxSize={{ base: '24px', md: '32px' }}
                />
              </Button>
            </Avatar>
          </VStack>

          <VStack>
            <Text
              fontSize={{ base: '18px', md: '24px' }}
              lineHeight={{ base: '111%', md: '117%' }}
              mb={{ base: '4px', mb: '8px' }}
            >
              Anna Rybachok
            </Text>
            <Badge display="inline-flex" fontSize="14px" lineHeight="129%">
              User
            </Badge>
          </VStack>
        </VStack>

        <HStack spacing={{ base: '12px', md: '16px' }}>
          <Card
            direction="column"
            justify="space-between"
            align="flex-start"
            w={{ base: '165px', md: '214px', xl: '209px' }}
            h={{ base: '96px', md: '108px' }}
          >
            <CardHeader>
              <HStack>
                <Icon
                  icon={`${sprite}$#{food}`}
                  color="#ef8964"
                  fontSize="20px"
                />
                <Text
                  color="rgba(239, 237, 232, 0.8)"
                  lineHeight={{ base: '133%', md: '150%' }}
                >
                  Daily calorie intake
                </Text>
              </HStack>
            </CardHeader>
            <CardFooter>
              <Text lineHeight={{ base: '111%', md: '133%' }}>0 min</Text>
            </CardFooter>
          </Card>
          <Card
            direction="column"
            justify="space-between"
            align="flex-start"
            w={{ base: '165px', md: '214px', xl: '209px' }}
            h={{ base: '96px', md: '108px' }}
          >
            <CardHeader>
              <HStack>
                <Icon
                  icon={`${sprite}$#{dumbbell}`}
                  color="#ef8964"
                  fontSize="20px"
                />

                <Text
                  color="rgba(239, 237, 232, 0.8)"
                  line-height={{ base: '133%', md: '150%' }}
                >
                  Daily physical activity
                </Text>
              </HStack>
            </CardHeader>
            <CardFooter>
              <Text lineHeight={{ base: '111%', md: '133%' }}>0 min</Text>
            </CardFooter>
          </Card>
        </HStack>

        <HStack spacing={2} align="flex-start">
          <Stack
            justify="center"
            align="center"
            borderRadius="50px"
            boxSize="24px"
            bgColor="#efa082"
          >
            <Icon
              icon={`${sprite}$#{exclamation-mark}`}
              color="#efede8"
              w="2px"
              h="16px"
            />
          </Stack>
          <Text
            w={{ base: '303px', md: '407px' }}
            h="73px"
            fontSize={{ base: '14px', md: '16px' }}
            lineHeight={{ base: '129%', md: '150%' }}
          >
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </Text>
        </HStack>

        <Button
          rightIcon={
            <Icon icon="mynaui:logout" fontSize="20px" color="#e6533c" />
          }
          display="inline-flex"
          alignContent="center"
          alignSelf="flex-end"
          iconSpacing="8px"
          h="auto"
          p="0"
          fontSize={{ base: '14px', md: '16px' }}
          fontWeight="normal"
          variant="unstyled"
        >
          Logout
        </Button>
      </VStack>
    </Stack>
  );
};
