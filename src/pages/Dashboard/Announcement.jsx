import {
  Box,
  Heading,
  Center,
} from '@chakra-ui/react'

import AnnouncementPost from './components/Announcement/AnnouncementPost'
import PostAnnouncement from './components/Announcement/PostAnnouncement'

export default function Announcement() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Announcement</Heading>

      <Center flexDirection='column'>
        <PostAnnouncement />

        <AnnouncementPost />
      </Center>
    </Box>
  )
}