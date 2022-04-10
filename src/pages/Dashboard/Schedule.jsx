import {
  Box,
  Heading,
  Center
} from '@chakra-ui/react'

import AddSchedule from './components/Schedule/AddSchedule'

export default function Schedule() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Schedule</Heading>
      <Center>
        <AddSchedule />
      </Center>
    </Box>
  )
}