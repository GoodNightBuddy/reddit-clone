import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { UserMenuProps } from './RightContent/UserMenu';

const SearchInput: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Flex
      flexGrow={1}
      mr={2}
      align={'center'}
      maxWidth={user ? 'auto' : '600px'}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.500' mb={1} />}
        />
        <Input
          type='text'
          placeholder='Search reddit'
          fontSize={'10pt'}
          _placeholder={{ color: 'gray.500' }}
          _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          h={'34px'}
          bg={'gray.50'}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
