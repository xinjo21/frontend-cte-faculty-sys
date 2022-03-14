import { Link } from 'react-router-dom'
import { Center,  Button, Heading } from '@chakra-ui/react'

function Error() {
  return (
    <Center w='100vw' h='100vh' flexDirection='column'>
      <Heading>
       Error 404  
      </Heading>
      Page not Found

      <Link to='/'>
        <Button colorScheme='blueCTE' mt='10px'>
          Take me back home!~
        </Button>
      </Link>
    </Center >
  );
}

export default Error;