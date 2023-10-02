import { authModalState } from '@/src/atoms/authModalAtom';
import { AuthModalTitles, AuthModalTypes } from '@/src/types/enums';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const setAuthModalState = useSetRecoilState(authModalState);

  const changeModalType = () => {
    setAuthModalState(prev => ({
      ...prev,
      type: AuthModalTypes.Login,
    }));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name='email'
        placeholder='email'
        type='email'
        mb={2}
        onChange={onChange}
        fontSize={'10pt'}
        _placeholder={{
          color: 'gray.500',
        }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg={'gray.50'}
      />
      <Input
        required
        name='password'
        placeholder='password'
        type='password'
        onChange={onChange}
        mb={2}
        fontSize={'10pt'}
        _placeholder={{
          color: 'gray.500',
        }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg={'gray.50'}
      />
      <Input
        required
        name='confirmPassword'
        placeholder='confirm password'
        type='password'
        onChange={onChange}
        mb={2}
        fontSize={'10pt'}
        _placeholder={{
          color: 'gray.500',
        }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg={'gray.50'}
      />
      <Button type='submit' w={'100%'} h={'36px'} mt={2} mb={2}>
        {AuthModalTitles.Login}
      </Button>
      <Flex fontSize={'9pt'} justifyContent={'center'}>
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color={'blue.500'}
          fontWeight={700}
          cursor={'pointer'}
          textTransform={'uppercase'}
          onClick={changeModalType}
        >
          {AuthModalTitles.Login}
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
