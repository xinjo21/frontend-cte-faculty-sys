import {
  Box,
  Flex,
  Text,
  Heading,
  Avatar,
  Center,
  IconButton,
  Spacer,
  Image
} from '@chakra-ui/react'

import { HiOutlineDotsVertical } from 'react-icons/hi'
import demopic from '../../media/demopic.png'


export default function Announcement() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Announcement</Heading>
      <Center flexDirection='column'>
        <AnnouncementPost />
        <AnnouncementPost />
        <AnnouncementPost />
      </Center>
    </Box>
  )
}

function AnnouncementPost() {
  return (
    <Box bgColor='gray.50' my={5} p={5} borderRadius={25} boxShadow='md' w={['80vw', '75vw', '700px']}>
      <Flex alignItems='center' mb={5}>
        <Avatar name='Lastname, First Middle' size='sm' mr={2} />
        <Box>
          <Heading size='xs'>
            Lastname, First Middle
          </Heading>
          <Text fontSize='xs' color='gray.500'>
            2022-03-01 @ 9:00AM
          </Text>
        </Box>
        <Spacer />
        <IconButton icon={<HiOutlineDotsVertical />} borderRadius={100} variant='ghost'/>
      </Flex>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio labore a voluptatibus voluptatum ea tenetur quo nesciunt expedita qui possimus, iste delectus placeat sunt impedit enim. Voluptate, eum sit.</Text>
      <Image src={demopic} my={2}/>
    </Box>
  )
}