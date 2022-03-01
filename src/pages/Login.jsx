import {
  Center,
  Box,
  Button,
  Text,
  Image,
  SlideFade,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Divider
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTE_logo from '../media/cte_logo.png'

function Login() {
  const [show, setShow] = useState(false)

  return (
    <Center bg='blueGrad' h='100vh' w='100vw' flexDirection='column'>
      <SlideFade initialScale={0.8} in>
        <Center bg='white' borderRadius={[0, 25]} px={[10, 5, 10]} py={5} w={['100vw', '480px']} h={['100vh', '100%']} flexDirection='column'>

          <Center>
            <Image boxSize='100px' src={CTE_logo} />
          </Center>
          <Center>
            <Text>
              Western Mindanao State University
            </Text>
          </Center>
          <Center pb={1}>
            <Heading size='lg' textAlign='center' fontWeight='black'>
              College of Teachers Education
            </Heading>
          </Center>

          <FormControl pt={5}>
            <FormLabel htmlFor='email'>
              <Heading size='sm'>
                Email
              </Heading>
            </FormLabel>
            <Input id='email' type='email' />
          </FormControl>

          <FormControl py={5}>
            <FormLabel htmlFor='password'>
              <Heading size='sm'>
                Password
              </Heading>
            </FormLabel>

            <InputGroup>
              <Input id='password' type={show ? 'text' : 'password'} />
              <InputRightElement width='4.5rem'>
                <Button size='sm' h='1.75rem' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Link to='/dashboard/announcement'>
            <Button w='100%' colorScheme='blue'>Login</Button>
          </Link>

          <Box py={5}>
            <Center>
              <Text>
                Having trouble logging in?
              </Text>
            </Center>
            <Center>
              <Button variant='link' colorScheme='blue'>Contact us</Button>
            </Center>
          </Box>

          <Divider />

          <Text fontSize='sm' color='blue.200' pt={5}>
            Made with ❤ by ICS
            {/* ERJ, MAV, RJS */}
          </Text>
        </Center>
      </SlideFade>


    </Center>
  );
}

export default Login;