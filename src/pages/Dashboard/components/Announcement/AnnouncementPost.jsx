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

export default function AnnouncementPost({data}) {
  return (
    <Box bgColor='gray.50' my={5} p={5} borderRadius={25} boxShadow='md' w={['80vw', '75vw', '700px']}>
      <Flex alignItems='center' mb={5}>
        <Avatar name='Lastname, First Middle' size='sm' mr={2} />
        <Box>
          <Heading size='xs'>
            Teacher Education(Admin)
          </Heading>
          <Text fontSize='xs' color='gray.500'>
            {data.create_at}
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
        {data.announcementType}
      </Heading>
      <Text>
        {data.announcementDetails}
      </Text>
      <Image src={'/images/' + data.announcementImage} my={2} />
    </Box>
  )
}