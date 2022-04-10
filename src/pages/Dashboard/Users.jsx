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
} from '@chakra-ui/react'

import { useMemo } from 'react'
import { useTable } from 'react-table'
import { HiCheck, HiTrash } from 'react-icons/hi'

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
              <IconButton colorScheme='green' icon={<HiCheck />} size='xs' m={1} />
              <IconButton colorScheme='red' icon={<HiTrash />} size='xs' m={1} />
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
            <Stack spacing={5}>
              <FormControl mb={5} isRequired>
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