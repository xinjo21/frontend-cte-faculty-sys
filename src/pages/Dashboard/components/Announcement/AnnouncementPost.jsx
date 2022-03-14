import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Spacer,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import { HiOutlineDotsVertical } from 'react-icons/hi'
import demopic from '../../../../media/demopic.png'

export default function AnnouncementPost() {
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
        <Menu>
          <MenuButton as={IconButton} icon={<HiOutlineDotsVertical />} borderRadius={100} variant='ghost' />
          <MenuList>
            <MenuItem>Update</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>

      </Flex>
      <Heading size='xs' mb={2}>
        Memorandum Order:
      </Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio labore a voluptatibus voluptatum ea tenetur quo nesciunt expedita qui possimus, iste delectus placeat sunt impedit enim. Voluptate, eum sit.</Text>
      <Image src={demopic} my={2} />
    </Box>
  )
}