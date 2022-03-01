import { Link, Outlet } from 'react-router-dom'

import {
  Box,
  Flex,
  Stack,
  Divider,
  Spacer,
  Heading,
  Center,
  Image,
  Icon,
  useMediaQuery
} from '@chakra-ui/react'

import {
  HiOutlineAnnotation,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
  HiOutlineClipboardList
} from 'react-icons/hi'

import CTE_logo from '../media/cte_logo.png'

var screenWidthMin = '(min-width: 48em)'
var mobileWidthMin = '(min-width: 30em)'

function Dashboard() {
  const [mobileView] = useMediaQuery(mobileWidthMin)

  return (
    <Flex bgColor='gray.200' flexDirection={['column', 'row-reverse']} color='gray.700' justifyContent='flex-end'>
      <Box p={5} w={['100%', '100vw-60px', '100vw-250px']}>
        <Outlet />
      </Box>
      {
        mobileView ?
          <DefaultNav />
          :
          <CompressedNav />
      }
    </Flex>
  )
}

function DefaultNav() {
  const [landscapeView] = useMediaQuery(screenWidthMin)

  return (
    <Stack
      w={['100vw', '60px', '250px']}
      h='100vh'
      p={2}
      bg='gray.50'
      position='sticky'
      top='0'
    >
      {
        landscapeView ?
          <Box my={5}>
            <Center>
              <Image boxSize='75px' src={CTE_logo} />
            </Center>
            <Center py={2}>
              <Heading size='xs' textAlign='center' fontWeight='black'>
                College of Teachers Education
              </Heading>
            </Center>
          </Box>
          :
          <Box my={5} visibility={['hidden', 'visible']} w={['0', '100%']}>
            <Center>
              <Image boxSize='45px' src={CTE_logo} />
            </Center>
            <Center py={2}>
              <Heading size='xs' textAlign='center' fontWeight='black'>
                CTE
              </Heading>
            </Center>
          </Box>
      }

      <Link to='announcement'>
        <DefNavBtn name='Announcement' icon={HiOutlineAnnotation} />
      </Link>
      <Link to='analytics'>
        <DefNavBtn name='Analytics' icon={HiOutlineChartBar} />
      </Link>
      <Link to='faculties'>
        <DefNavBtn name='Faculties' icon={HiOutlineUserGroup} />
      </Link>
      <Link to='schedule'>
        <DefNavBtn name='Schedule' icon={HiOutlineClipboardList} />
      </Link>
      <Spacer />
      <Divider />

      <Link to='profile'>
        <DefNavBtn name='Profile' icon={HiOutlineUserCircle} />
      </Link>
    </Stack>
  )
}

function CompressedNav() {
  return (
    <Stack
      direction='row'
      p={2}
      bg='gray.50'
      position='sticky'
      bottom='0'
      boxShadow='dark-lg'
      justifyContent='space-around'
    >
      <Link to='announcement'>
        <DefNavBtn name='Announcement' icon={HiOutlineAnnotation} />
      </Link>
      <Link to='analytics'>
        <DefNavBtn name='Analytics' icon={HiOutlineChartBar} />
      </Link>

      <Link to='faculties'>
        <DefNavBtn name='Faculties' icon={HiOutlineUserGroup} />
      </Link>

      <Link to='schedule'>
        <DefNavBtn name='Schedule' icon={HiOutlineClipboardList} />
      </Link>

      <Link to='profile'>
        <DefNavBtn name='Profile' icon={HiOutlineUserCircle} />
      </Link>
    </Stack>
  )
}

function DefNavBtn({ name, icon }) {
  const [landscapeView] = useMediaQuery(screenWidthMin)
  return (
    <Flex
      p={2}
      bgColor='gray.200'
      borderRadius={5}
      alignItems='center'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      _active={{
        bg: 'blue.400',
        transform: 'scale(0.98)',
      }}
    >
      <Icon w={6} h={6} alignContent='center' as={icon} />
      {landscapeView ? <Heading size='xs' mx={2}>{name}</Heading> : ''}
    </Flex>
  )
}
export default Dashboard;