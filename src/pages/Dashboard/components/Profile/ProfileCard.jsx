import {
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const editable = true

export default function ProfileCard() {
  return (
    <Box bgColor='gray.50' borderRadius={25} p={5}>
      <Heading size='md' color='gray.500' mb={5}>Personal Information</Heading>
      <Flex flexDirection={['column', 'row']}>
        <Box w='100%' px={5}>
          <FormControl mb={5}>
            <FormLabel htmlFor='lastName'>Last Name</FormLabel>
            <Input isReadOnly={editable} id='lastName' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <Input isReadOnly={editable} id='firstName' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel htmlFor='middleName'>Middle Name</FormLabel>
            <Input isReadOnly={editable} id='middleName' />
          </FormControl>
        </Box>

        <Box w='100%' px={5}>
          <FormControl mb={5}>
            <FormLabel htmlFor='birthdate'>Birthdate</FormLabel>
            <Input isReadOnly={editable} id='birthdate' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel htmlFor='civilStatus'>Civil Status</FormLabel>
            <Input isReadOnly={editable} id='civilStatus' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel htmlFor='gender'>Gender</FormLabel>
            <Input isReadOnly={editable} id='gender' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel htmlFor='religion'>Religion</FormLabel>
            <Input isReadOnly={editable} id='religion' />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  )
}