import {
  Box,
  Heading,
  Center,
} from '@chakra-ui/react'

import AddRequest from './components/Request/AddRequest'
import RequestPost from './components/Request/RequestPost'

export default function Memos() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Requests</Heading>
      <Center flexDir='column'>
        <AddRequest />
        <RequestPost />
      </Center>
    </Box>
  )
}