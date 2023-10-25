import { CommunityDescription, CommunityTypes } from '@/src/types/enums';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Divider,
  Text,
  Input,
  Stack,
  Checkbox,
  Flex,
  Icon,
} from '@chakra-ui/react';
import React, { ReactEventHandler, useState } from 'react';
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = useState('');
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState(CommunityTypes.Public);

  const handleChange: ReactEventHandler<HTMLInputElement> = event => {
    const { value } = event.currentTarget;
    if (value.length > 21) return;

    setCharsRemaining(21 - value.length);
    setCommunityName(value);
  };

  const onCommunityNameChange: ReactEventHandler<HTMLInputElement> = event => {
    setCommunityType(event.currentTarget.name as CommunityTypes);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={'flex'}
            flexDir={'column'}
            fontSize={15}
            padding={3}
          >
            Create a community
          </ModalHeader>
          <Box pl={3} pr={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody display={'flex'} flexDir={'column'} padding={'10px 0px'}>
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontSize={11} color={'gray.500'}>
                Community names including capitalization cannot be change
              </Text>
              <Text
                position={'relative'}
                top={7}
                left={'10px'}
                w={5}
                color={'gray.400'}
              >
                r/
              </Text>
              <Input
                value={communityName}
                size={'sm'}
                pl='22px'
                onChange={handleChange}
                position={'relative'}
              />
              <Text
                fontSize={'9pt'}
                color={charsRemaining === 0 ? 'red' : 'gray.500'}
              >
                {charsRemaining}Characters remaining
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community type
                </Text>
                <Stack spacing={2}>
                  <Checkbox
                    name={CommunityTypes.Public}
                    isChecked={communityType === CommunityTypes.Public}
                    onChange={onCommunityNameChange}
                  >
                    <Flex align={'center'}>
                      <Icon as={BsFillPersonFill} color={'gray.500'} mr={2} />
                      <Text fontSize={'10pt'} mr={1}>
                        {CommunityTypes.Public}
                      </Text>
                      <Text fontSize={'8pt'} color={'gray.500'} pt={1}>
                        {CommunityDescription.Public}
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name={CommunityTypes.Restricted}
                    isChecked={communityType === CommunityTypes.Restricted}
                    onChange={onCommunityNameChange}
                  >
                    <Flex align={'center'}>
                      <Icon as={BsFillEyeFill} color={'gray.500'} mr={2} />
                      <Text fontSize={'10pt'} mr={1}>
                        {CommunityTypes.Restricted}
                      </Text>
                      <Text fontSize={'8pt'} color={'gray.500'} pt={1}>
                        {CommunityDescription.Restricted}
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name={CommunityTypes.Private}
                    isChecked={communityType === CommunityTypes.Private}
                    onChange={onCommunityNameChange}
                  >
                    <Flex align={'center'}>
                      <Icon as={HiLockClosed} color={'gray.500'} mr={2} />
                      <Text fontSize={'10pt'} mr={1}>
                        {CommunityTypes.Private}
                      </Text>
                      <Text fontSize={'8pt'} color={'gray.500'} pt={1}>
                        {CommunityDescription.Private}
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter bg={'gray.100'} borderRadius={'0px 0px 10px 10px'}>
            <Button variant={'outline'} h={'30px'} mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button h={'30px'} onClick={() => {}}>
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
