import { useState } from 'react'

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Button,
  Flex,
  Spacer,
  Select,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { useMemo } from 'react'
import { useTable } from 'react-table'
import { HiTrash } from 'react-icons/hi'
import { MdModeEdit } from 'react-icons/md'

export default function Users() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Users</Heading>

      <DataTable />

    </Box>
  )
}

function DataTable() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false)

  return (
    <TableContainer>
      <Flex>
        <Spacer />
        <Button size='sm' colorScheme='green' m={1} onClick={onOpen}>Add user</Button>
      </Flex>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Last Name</Th>
            <Th>First Name</Th>
            <Th>Email</Th>
            <Th>User Type</Th>
            <Th>Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>TestLastName</Td>
            <Td>TestFirstName</Td>
            <Td>email@email.com</Td>
            <Td>Admin</Td>
            <Td>
              <EditUser />
              <DeleteUser />
              {/* <IconButton colorScheme='red' icon={<HiTrash />} size='xs' m={1} /> */}
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='gray.700'>Add user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl isRequired>
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <Input id='firstName' />
              </FormControl>

              <FormControl mb={5} isRequired>
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <Input id='lastName' />
              </FormControl>

              <FormControl mb={5} isRequired>
                <FormLabel htmlFor='emailAd'>Email Address</FormLabel>
                <Input id='emailAd' />
              </FormControl>

              <FormControl py={5}>
                <FormLabel htmlFor='password'>
                  <Heading size='sm'>
                    Password
                  </Heading>
                </FormLabel>

                <InputGroup>
                  <Input id='password' type={show ? 'text' : 'password'} />
                  <InputRightElement width='4.5rem'>
                    <Button size='sm' h='1.75rem' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='userType' fontSize='sm'>User Type</FormLabel>
                <Select placeholder='Select Type' size='sm' id='userType'>
                  <option value="announcement">Admin</option>
                  <option value="memo">User</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={2} onClick={onClose}>Discard</Button>
            <Button colorScheme='blue'>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </TableContainer>
  )
}

function EditUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false)


  return (
    <>
      <IconButton colorScheme='green' icon={<MdModeEdit />} onClick={onOpen} size='xs' m={1} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='gray.700'>Edit user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl isRequired>
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <Input id='firstName' />
              </FormControl>

              <FormControl mb={5} isRequired>
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <Input id='lastName' />
              </FormControl>

              <FormControl mb={5} isRequired>
                <FormLabel htmlFor='emailAd'>Email Address</FormLabel>
                <Input id='emailAd' />
              </FormControl>

              <FormControl py={5}>
                <FormLabel htmlFor='password'>
                  <Heading size='sm'>
                    Password
                  </Heading>
                </FormLabel>

                <InputGroup>
                  <Input id='password' type={show ? 'text' : 'password'} />
                  <InputRightElement width='4.5rem'>
                    <Button size='sm' h='1.75rem' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='userType' fontSize='sm'>User Type</FormLabel>
                <Select placeholder='Select Type' size='sm' id='userType'>
                  <option value="announcement">Admin</option>
                  <option value="memo">User</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={2} onClick={onClose}>Discard</Button>
            <Button colorScheme='blue'>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

function DeleteUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton colorScheme='red' icon={<HiTrash />} onClick={onOpen} size='xs' m={1} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='gray.700'>Delete user?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Delete FIRSTNAMEUSER?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={2} onClick={onClose}>Discard</Button>
            <Button colorScheme='blue'>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}