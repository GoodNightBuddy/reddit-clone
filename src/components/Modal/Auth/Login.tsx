import { AuthModalTitles } from '@/src/types/enums';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
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
      <Button type='submit' w={'100%'} h={'36px'} mt={2} mb={2}>
        {AuthModalTitles.Login}
      </Button>
      <Flex fontSize={'9pt'} justifyContent={'center'}>
        <Text mr={1}>New here?</Text>
        <Text
          color={'blue.500'}
          fontWeight={700}
          cursor={'pointer'}
          textTransform={'uppercase'}
        >
          {AuthModalTitles.Login}
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
