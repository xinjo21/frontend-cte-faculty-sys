import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import {
  Box,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react'


import DefaultNav from './Dashboard/components/DefaultNav'
import CompressedNav from './Dashboard/components/CompressedNav'
import MobileNav from './Dashboard/components/MobileNav'

var mobileWidthMin = '(min-width: 30em)'
var screenWidthMin = '(min-width: 48em)'

function Dashboard() {
  const [compressedView] = useMediaQuery(screenWidthMin)
  const [mobileView] = useMediaQuery(mobileWidthMin)
  const [nav, setNav] = useState(true)

  function navClicked() {
    setNav(!nav)
  }

  return (
    <Flex bgColor='gray.200' flexDirection={['column', 'row-reverse']} color='gray.700' justifyContent='flex-end'>
      <Box p={5} px={10} w={['100%', '100vw-60px', '100vw-250px']}>
        <Outlet />
      </Box>
      {
        mobileView ?
          nav && compressedView ?
            <DefaultNav nav={navClicked} />
            :
            <CompressedNav nav={navClicked} />
          : <MobileNav />

      }
    </Flex>
  )
}

export default Dashboard;