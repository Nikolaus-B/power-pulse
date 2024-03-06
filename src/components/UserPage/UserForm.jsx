import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  FormErrorMessage,
  VStack,
  HStack,
  RadioGroup,
  Radio,
  Text,
  Button,
} from '@chakra-ui/react';

//----------------------------------------------------
import { CheckCircleIcon } from '@chakra-ui/icons';
import { fetchUserCurrent } from '../../redux/user/operations';

//----------------------------------------------------

const validation = Yup.object({
  name: Yup.string()
    .min(3, 'Name too short!')
    .max(27, 'Name too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

//----------------------------------------------------

export const UserForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { name, email } = values;
    dispatch(fetchUserCurrent({ name, email }));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        height: '',
        currentWeight: '',
        desiredWeight: '',
        dob: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {formik => (
        <Stack
          as="form"
          onSubmit={formik.handleSubmit}
          spacing={{ base: '40px', md: '16px' }}
          paddingRight={{ xl: '64px' }}
          borderRight={{ xl: '1px solid rgba(239, 237, 232, 0.2)' }}
        >
          <Stack spacing="14px">
            <Stack
              spacing="14px"
              direction={{ base: 'column', md: 'row', xl: 'row' }}
            >
              <FormControl
                isInvalid={formik.errors.name && formik.touched.name}
              >
                <FormLabel
                  fontSize={{ base: '12px', md: '14px' }}
                  lineHeight={{ base: '150%', md: '129%' }}
                  mb={{ base: '4px', md: '8px' }}
                >
                  Name
                </FormLabel>

                <Input
                  name="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                  placeholder="Anna Rybachok"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  aria-label="name"
                  w="100%"
                  h={{ base: '46px', md: '52px' }}
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '129%', md: '150%' }}
                />

                {!formik.errors.name ? (
                  <FormErrorMessage
                    mt="4px"
                    color="#3cbf61"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    Success name
                  </FormErrorMessage>
                ) : (
                  <FormErrorMessage
                    mt="4px"
                    color="#d80027"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    Error name
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel
                  fontSize={{ base: '12px', md: '14px' }}
                  lineHeight={{ base: '150%', md: '129%' }}
                  mb={{ base: '4px', md: '8px' }}
                >
                  Email
                </FormLabel>

                <Input
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  placeholder="annarybachok@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  aria-label="email"
                  w="100%"
                  h={{ base: '46px', md: '52px' }}
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '129%', md: '150%' }}
                />

                {!formik.errors.email ? (
                  <FormErrorMessage
                    mt="4px"
                    color="#3cbf61"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    Success email
                  </FormErrorMessage>
                ) : (
                  <FormErrorMessage
                    mt="4px"
                    color="#d80027"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    Error email
                  </FormErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row', xl: 'row' }}
              spacing={{ base: '14px', md: '14px', xl: '14px' }}
            >
              <HStack spacing="14px">
                <FormControl>
                  <FormLabel
                    fontSize={{ base: '12px', md: '14px' }}
                    lineHeight={{ base: '150%', md: '129%' }}
                    mb={{ base: '4px', md: '8px' }}
                  >
                    Height
                  </FormLabel>

                  <Input
                    name="height"
                    type="number"
                    {...formik.getFieldProps('height')}
                    placeholder={0}
                    value={formik.values.height}
                    onChange={formik.handleChange}
                    aria-label="height"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontSize={{ base: '12px', md: '14px' }}
                    lineHeight={{ base: '150%', md: '129%' }}
                    mb={{ base: '4px', md: '8px' }}
                  >
                    Current Weight
                  </FormLabel>

                  <Input
                    name="currentWeight"
                    type="number"
                    {...formik.getFieldProps('currentWeight')}
                    placeholder={0}
                    value={formik.values.currentWeight}
                    onChange={formik.handleChange}
                    aria-label="currentWeight"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />
                </FormControl>
              </HStack>
              <HStack spacing="14px">
                <FormControl>
                  <FormLabel
                    fontSize={{ base: '12px', md: '14px' }}
                    lineHeight={{ base: '150%', md: '129%' }}
                    mb={{ base: '4px', md: '8px' }}
                  >
                    Desired Weight
                  </FormLabel>

                  <Input
                    name="desiredWeight"
                    type="number"
                    {...formik.getFieldProps('desiredWeight')}
                    placeholder={0}
                    value={formik.values.desiredWeight}
                    onChange={formik.handleChange}
                    aria-label="desiredWeight"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontSize={{ base: '12px', md: '14px' }}
                    lineHeight={{ base: '150%', md: '129%' }}
                    mb={{ base: '4px', md: '8px' }}
                  >
                    Date of birth
                  </FormLabel>

                  <Input
                    name="dob"
                    type="date"
                    {...formik.getFieldProps('dob')}
                    placeholder="Select Date"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    aria-label="dob"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />
                </FormControl>
              </HStack>
            </Stack>
          </Stack>
          <Stack spacing={{ base: '40px', md: '32px' }}>
            <Stack spacing="0">
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                lineHeight={{ base: '150%', md: '129%' }}
                mb={{ base: '4px', md: '8px' }}
              >
                Blood
              </Text>
              <HStack justify="space-between">
                <RadioGroup size={{ base: 'base', md: 'md' }} variant="groove">
                  <VStack>
                    <HStack spacing="8px">
                      <Radio value="1">1</Radio>
                      <Radio value="2">2</Radio>
                      <Radio value="3">3</Radio>
                      <Radio value="4">4</Radio>
                    </HStack>
                  </VStack>
                </RadioGroup>
                <RadioGroup size={{ base: 'base', md: 'md' }} variant="groove">
                  <HStack spacing="8px">
                    <Radio value="1">Male</Radio>
                    <Radio value="2">Female</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
            </Stack>

            <RadioGroup size={{ base: 'base', md: 'md' }} variant="groove">
              <VStack spacing="8px" align="flex-start">
                <Radio value="1">
                  Sedentary lifestyle (little or no physical activity)
                </Radio>
                <Radio value="2">
                  Light activity (light exercises/sports 1-3 days per week)
                </Radio>
                <Radio value="3">
                  Moderately active (moderate exercises/sports 3-5 days per
                  week)
                </Radio>
                <Radio value="4">
                  Very active (intense exercises/sports 6-7 days per week)
                </Radio>
                <Radio value="5">
                  Extremely active (very strenuous exercises/sports and physical
                  work)
                </Radio>
              </VStack>
            </RadioGroup>
          </Stack>
          <Button
            type="submit"
            w={{ base: '115px', md: '144px' }}
            mt={{ base: '40px', md: '38px', xl: '48px' }}
            size={{ base: 'base', md: 'md' }}
            variant="solid"
            disabled
          >
            Save
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
