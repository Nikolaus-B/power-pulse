import { Formik } from 'formik';
// import * as Yup from 'yup';
import { object, string, number, date } from 'yup';

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

//----------------------------------------------------
import { useDispatch } from 'react-redux';
import { fetchUserParams } from '../../redux/user/operations';
import { useAuth } from 'components/hooks/AuthHook';
import { useState } from 'react';

//----------------------------------------------------
const validation = object({
  name: string().min(3, 'Name too short!').max(33, 'Name too long!'),
  height: number()
    .min(50, 'Height too small')
    // .positive()
    .integer()
    .required('Required'),
  currentWeight: number()
    .min(45, 'Weight too low')
    // .positive()
    .integer()
    .required('Required'),
  desiredWeight: number()
    .min(45, 'Weight too low')
    // .positive()
    .integer()
    .required('Required'),
  birthday: date()
    .nullable()
    .default(() => new Date()),
});

//----------------------------------------------------

export const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [blood, setBlood] = useState('1');
  const [sex, setSex] = useState('1');
  const [levelActivity, setLevelActivity] = useState('1');

  const handleSubmit = values => {
    const {
      name,
      email,
      blood,
      sex,
      height,
      currentWeight,
      desiredWeight,
      birthday,
      levelActivity,
    } = values;

    dispatch(
      fetchUserParams({
        name: name,
        email: email,
        blood: blood,
        sex: sex,
        height: height,
        currentWeight: currentWeight,
        desiredWeight: desiredWeight,
        birthday: birthday,
        levelActivity: levelActivity,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        blood: '',
        sex: '',
        height: 0,
        currentWeight: 0,
        desiredWeight: 0,
        birthday: '',
        levelActivity: '',
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
          autoComplete="off"
          autoFocus={false}
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
                // isInvalid={true}
                // autoFocus={true}
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
                  placeholder={user.name}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  aria-label="name"
                  aria-invalid={true}
                  w="100%"
                  h={{ base: '46px', md: '52px' }}
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '129%', md: '150%' }}
                />

                {formik.errors.name && formik.touched.name && (
                  <FormErrorMessage
                    mt="4px"
                    color="#d80027"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    {formik.errors.name}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
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
                  placeholder={user.email}
                  aria-label="email"
                  isReadOnly={true}
                  w="100%"
                  h={{ base: '46px', md: '52px' }}
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '129%', md: '150%' }}
                />
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row', xl: 'row' }}
              spacing={{ base: '14px', md: '14px', xl: '14px' }}
            >
              <HStack spacing="14px">
                <FormControl
                  isInvalid={formik.errors.height && formik.touched.height}
                  alignSelf="baseline"
                >
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
                    placeholder={user.height}
                    value={formik.values.height}
                    onChange={formik.handleChange}
                    aria-label="height"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />

                  {formik.errors.height && formik.touched.height && (
                    <FormErrorMessage
                      mt="4px"
                      color="#d80027"
                      fontSize="12px"
                      lineHeight="150%"
                      gap="4px"
                    >
                      <CheckCircleIcon fontSize={14} />
                      {formik.errors.height}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.errors.currentWeight && formik.touched.currentWeight
                  }
                  alignSelf="baseline"
                >
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
                    placeholder={user.currentWeight}
                    value={formik.values.currentWeight}
                    onChange={formik.handleChange}
                    aria-label="currentWeight"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />

                  {formik.errors.currentWeight &&
                    formik.touched.currentWeight && (
                      <FormErrorMessage
                        mt="4px"
                        color="#d80027"
                        fontSize="12px"
                        lineHeight="150%"
                        gap="4px"
                      >
                        <CheckCircleIcon fontSize={14} />
                        {formik.errors.currentWeight}
                      </FormErrorMessage>
                    )}
                </FormControl>
              </HStack>
              <HStack spacing="14px">
                <FormControl
                  isInvalid={
                    formik.errors.desiredWeight && formik.touched.desiredWeight
                  }
                  alignSelf="baseline"
                >
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
                    placeholder={user.desiredWeight}
                    value={formik.values.desiredWeight}
                    onChange={formik.handleChange}
                    aria-label="desiredWeight"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />

                  {formik.errors.desiredWeight &&
                    formik.touched.desiredWeight && (
                      <FormErrorMessage
                        mt="4px"
                        color="#d80027"
                        fontSize="12px"
                        lineHeight="150%"
                        gap="4px"
                      >
                        <CheckCircleIcon fontSize={14} />
                        {formik.errors.desiredWeight}
                      </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl alignSelf="baseline">
                  <FormLabel
                    fontSize={{ base: '12px', md: '14px' }}
                    lineHeight={{ base: '150%', md: '129%' }}
                    mb={{ base: '4px', md: '8px' }}
                  >
                    Date of birth
                  </FormLabel>

                  <Input
                    name="birthday"
                    type="date"
                    {...formik.getFieldProps('birthday')}
                    placeholder="Select Date"
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    aria-label="birthday"
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
                <RadioGroup
                  name="blood"
                  type="radio"
                  defaultValue={user.blood}
                  // onChange={formik.handleChange}
                  // value={formik.values.blood}
                  value={blood}
                  onChange={setBlood}
                  size={{ base: 'base', md: 'md' }}
                  variant="groove"
                >
                  <VStack>
                    <HStack spacing="8px">
                      <Radio value="1">1</Radio>
                      <Radio value="2">2</Radio>
                      <Radio value="3">3</Radio>
                      <Radio value="4">4</Radio>
                    </HStack>
                  </VStack>
                </RadioGroup>
                <RadioGroup
                  name="sex"
                  type="radio"
                  defaultValue={user.sex}
                  // value={formik.values.sex}
                  // onChange={formik.handleChange}
                  value={sex}
                  onChange={setSex}
                  size={{ base: 'base', md: 'md' }}
                  variant="groove"
                >
                  <HStack spacing="8px">
                    <Radio value="1">Male</Radio>
                    <Radio value="2">Female</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
            </Stack>

            <RadioGroup
              name="levelActivity"
              type="radio"
              defaultValue={user.levelActivity}
              // value={formik.values.levelActivity}
              // onChange={formik.handleChange}
              value={levelActivity}
              onChange={setLevelActivity}
              size={{ base: 'base', md: 'md' }}
              variant="groove"
            >
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
