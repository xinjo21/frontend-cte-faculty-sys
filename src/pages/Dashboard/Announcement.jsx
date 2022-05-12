import { useState, useEffect, useRef } from 'react'
import axios from "axios";

import {
  Box,
  Heading,
  Center,
} from '@chakra-ui/react'

import AnnouncementPost from './components/Announcement/AnnouncementPost'
import PostAnnouncement from './components/Announcement/PostAnnouncement'

export default function Announcement() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.ctewmsufaculty.xyz/api/announcement/show")
      .then((res) => setList(res.data))
  }, [list]);

  return (
    <Box>
      <Heading size='lg' mb={5}>Announcement</Heading>

      <Center flexDirection='column'>
        <PostAnnouncement />
        {
          list.map((index) =>
            <AnnouncementPost key={index.announcement_id} post={index} />
          )
        }
      </Center>
    </Box>
  )
}