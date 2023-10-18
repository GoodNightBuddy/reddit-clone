import React, { useState } from 'react';
import CreateCommunityModal from '../../Modal/Community/CreateCommunityModal';
import { Flex, Icon, MenuItem, Text } from '@chakra-ui/react';
import { GrAdd } from 'react-icons/gr';

const Communities: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        w={'100%'}
        fontSize={'10pt'}
        _hover={{ bg: 'gray.100' }}
        onClick={() => setOpen(true)}
      >
        <Flex align={'center'}>
          <Icon as={GrAdd} fontSize={20} mr={2} />
          <Text>Create community</Text>
        </Flex>
      </MenuItem>
    </>
  );
};

export default Communities;
