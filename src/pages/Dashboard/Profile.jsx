import { useEffect } from 'react'
import {
  Box,
  Heading,
  Center,
  Image,
  Table,
  Tr,
  Th,
  Td,
  Tag,
  Stack,
  useToast,
  Flex,
  Divider,
  Button,

  EditablePreview,
  useColorModeValue,
  IconButton,
  Input,
  useEditableControls,
  ButtonGroup,
  Editable,
  Tooltip,
  EditableInput
} from '@chakra-ui/react'

import { HiCheck, HiX } from 'react-icons/hi'

import CTE_logo from '../../media/samplepic.JPG'

export default function Profile() {
  const toast = useToast()

  useEffect(
    () =>
      toast({
        title: 'Click on the text to edit',
        description: '',
        status: 'info',
        duration: 9000,
        isClosable: true,
        position: 'bottom',
      })

  )

  return (
    <Box w='100%'>
      <Heading size='lg' mb={5}>Profile</Heading>
      <Stack direction={['column', 'row']}>
        <InformationCard />
        <Stack w={['80vw', '54vw']}>
          <PersonalInformation />
          <Divider />
          <CollegeInformation />
          <Divider />
          <EducationalInformation />
        </Stack>
      </Stack>
    </Box>
  )
}

function InformationCard() {
  return (
    <Box bgColor='gray.50' h='78vh' borderRadius={25} w={['80vw', '300px']}>
      <Center flexDirection='column' p={5}>
        <Image boxSize='175px' src={CTE_logo} objectFit='cover' borderRadius='full' mb={5} />
        <Heading size='sm'>FirstName LastName</Heading>
      </Center>
      <Table size='sm' variant='unstyled'>
        <Tr>
          <Th>Position</Th>
          <Td>College Dean</Td>
        </Tr>
        <Tr>
          <Th>Department</Th>
          <Td>Elementary Education Department</Td>
        </Tr>
        <Tr>
          <Th>Employment Date</Th>
          <Td>April 22, 2021</Td>
        </Tr>
        <Tr>
          <Th>Status</Th>
          <Td>
            <Tag colorScheme='green'>Available</Tag>
          </Td>
        </Tr>
      </Table>
      <Center>
        <Button m={2} colorScheme='blueCTE' w='90%'>
          Logout
        </Button>
      </Center>
    </Box>
  )
}

function PersonalInformation() {
  return (
    <Box bgColor='gray.50' borderRadius={25} p={5} py={9} >
      <Heading size='md' color='gray.500' mb={5}>Personal Information</Heading>
      <Flex flexDirection={['column', 'row']}>
        <Box w={['100%','25vw']}>
          <EditableTexts title='Last Name' data='Alelihano' />
          <EditableTexts title='First Name' data='Nayn' />
          <EditableTexts title='Middle Name' data='Copper' />
        </Box>
        <Box w={['100%','25vw']}>
          <EditableTexts title='Birthdate' data='TEMPLATE' /> {/* DATE PICKER PLEASE */}
          <EditableTexts title='Civil Status' data='Single' />
          <EditableTexts title='Gender' data='Female' />
          <EditableTexts title='Religion' data='Roman Catholic' />
        </Box>
      </Flex>
      <EditableTexts title='Address' data='Block 1, Lot 2, Southcom' />
    </Box>
  )
}

function CollegeInformation() {

  return (
    <Box bgColor='gray.50' borderRadius={25} p={5} py={9}>
      <Heading size='md' color='gray.500' mb={5}>College/Employment Information</Heading>
      <EditableTexts title='Department' data='Elementary Education' />
      <EditableTexts title='College Title' data='Department Head' />
      <EditableTexts title='Employment Date' data='TEMPLATE' />
    </Box>
  )
}

function EducationalInformation() {
  return (
    <Box bgColor='gray.50' borderRadius={25} p={5} py={9}>
      <Heading size='md' color='gray.500' mb={5}>Educational Information</Heading>
      <EditableTexts title="Bachelor's" data='Bachelor in Elementary Education Major in English' />
      <EditableTexts title="Masteral" data='Master in Education Major in English' />
      <EditableTexts title="Doctorate" data='Doctor of Education' />
      <Divider mb={5} />
      <EditableTexts title="Published Works" data='Lorem2' />
      <EditableTexts title="Seminar Attended" data='Lorem2' />
    </Box>
  )
}

function EditableTexts({ data, title }) {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" spacing={2}>
        <IconButton colorScheme='green' icon={<HiCheck />} {...getSubmitButtonProps()} />
        <IconButton colorScheme='red' icon={<HiX />}{...getCancelButtonProps()} />
      </ButtonGroup>
    ) : null;
  }

  return (
    <Editable defaultValue={data} isPreviewFocusable={true} selectAllOnFocus={false}>
      <Heading size='sm' color='gray.600'>{title}</Heading>
      <Flex alignItems='baseline'>
        <Tooltip label="Click to edit">
          <EditablePreview
            py={2}
            px={4}
            m={2}
            _hover={{
              background: useColorModeValue("gray.300", "gray.700")
            }}
          />
        </Tooltip>
        <Input as={EditableInput} m={2} />
        <EditableControls />
      </Flex>
    </Editable>
  )
}