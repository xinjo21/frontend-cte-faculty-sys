import {
  Box,
  Flex,
  Button,
  Spacer,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function Analytics() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Analytics</Heading>

      <Flex flexWrap='wrap' justifyContent='center'>
        <EducationalBGCard />
        <DepartmentCard />
      </Flex>

    </Box>
  )
}

function DepartmentCard() {
  const data = {
    labels: ['Secondary Education', 'Elementary Education', 'Special Education'],
    datasets: [
      {
        label: '# of Votes',
        data: [23, 27, 16],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return(
    <Box bgColor='gray.50' p={5} borderRadius={25} maxWidth='500px' m={2}>
      <Heading size='xs' mb={2}>
        Educational Background
      </Heading>
      <Doughnut data={data}/>
      <Box color='gray.500' mt={2}>
        <Text fontSize='sm'>Secondary Education: 23</Text>
        <Text fontSize='sm'>Elementary Education: 27</Text>
        <Text fontSize='sm'>Special Education: 16</Text>
      </Box>
    </Box>
  )
}

function EducationalBGCard() {
  const data = {
    labels: ['Bachelors', 'Master', 'Doctor'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box bgColor='gray.50' p={5} borderRadius={25} maxWidth='500px' m={2}>
      <Heading size='xs' mb={2}>
        Educational Background
      </Heading>
      <Doughnut data={data}/>
      <Box color='gray.500' mt={2}>
        <Text fontSize='sm'>Bachelor's Degree Holder: 12</Text>
        <Text fontSize='sm'>Master's Degree Holder: 19</Text>
        <Text fontSize='sm'>Doctorate's Degree Holder: 3</Text>
      </Box>
    </Box>
  )
}