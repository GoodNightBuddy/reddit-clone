import { authModalState } from '@/src/atoms/authModalAtom';
import { auth } from '@/src/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/src/firebase/error';
import { AuthModalTitles, AuthModalTypes } from '@/src/types/enums';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signInWithEmailAndPAssword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const setAuthModalState = useSetRecoilState(authModalState);

  const changeModalType = (type: AuthModalTypes) => {
    setAuthModalState(prev => ({
      ...prev,
      type,
    }));
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPAssword(loginForm.email, loginForm.password);
  };

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
      {error && (
        <Text textAlign={'center'} color={'red'} fontSize={'10pt'}>
          {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button
        type='submit'
        w={'100%'}
        h={'36px'}
        mt={2}
        mb={2}
        isLoading={loading}
      >
        {AuthModalTitles.Login}
      </Button>
      <Flex fontSize={'9pt'} justifyContent={'center'} mb={2}>
        <Text mr={1}>Forgot your password?</Text>
        <Text
          color={'blue.500'}
          cursor={'pointer'}
          onClick={() => changeModalType(AuthModalTypes.ResetPassword)}
        >
          {AuthModalTitles.ResetPassword}
        </Text>
      </Flex>
      <Flex fontSize={'9pt'} justifyContent={'center'} mb={2}>
        <Text mr={1}>New here?</Text>
        <Text
          color={'blue.500'}
          fontWeight={700}
          cursor={'pointer'}
          textTransform={'uppercase'}
          onClick={() => changeModalType(AuthModalTypes.Signup)}
        >
          {AuthModalTitles.Signup}
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
