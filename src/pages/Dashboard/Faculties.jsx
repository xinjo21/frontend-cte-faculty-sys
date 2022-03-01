import {
  Box,
  Flex,
  Button,
  Spacer,
  Center,
  Heading,
  Text,
  Image
} from '@chakra-ui/react'

import CTE_logo from '../../media/samplepic.JPG'

export default function Faculties() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Faculty</Heading>

      <Flex flexWrap='wrap' justifyContent='center'>
        <FacultyProfile />
        <FacultyProfile />
        <FacultyProfile />

      </Flex>

    </Box>
  )
}

function FacultyProfile() {
  return (
    <Box bgColor='gray.50' p={5} borderRadius={25} w='350px' m={2}>
      <Center mb={2} >
        <Image w='300px' h='400px' src={CTE_logo} objectFit='cover' borderRadius={25}/>
      </Center>
      <Heading size='md'>Rupert Sierra</Heading>
      <Text fontSize='sm' color='gray.600'>Bachelor of Secondary Education Major in Science</Text>
    </Box>
  )
}