import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import CTE_logo from '../../media/samplepic.JPG'

export default function Faculties() {
  return (
    <Box>
      <Heading size='lg' mb={5}>Faculties</Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        {/* DEANS OFFICE */}
        <AccordionItem>
          <AccordionButton>
            <Heading flex='1' size='sm'>
              Dean's Office
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex flexWrap='wrap' justifyContent='center'>
              <FacultyProfile name='Somblingo' designation='College Dean' />
            </Flex>

          </AccordionPanel>
        </AccordionItem>

        {/* ELEMENTARY EDUCATION DEPARTMENT */}
        <AccordionItem>
          <AccordionButton>
            <Heading flex='1' size='sm'>
              Elementary Education Department
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex flexWrap='wrap' justifyContent='center'>
              <FacultyProfile name='Naniango Lim' designation='Department Head' />
            </Flex>
          </AccordionPanel>
        </AccordionItem>


        {/* SECONDARY EDUCATION DEPARTMENT */}
        <AccordionItem>
          <AccordionButton>
            <Heading flex='1' size='sm'>
              Secondary Education Department
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex flexWrap='wrap' justifyContent='center'>
              <FacultyProfile name='Alissa Mendoza' designation='Department Head' />
            </Flex>
          </AccordionPanel>
        </AccordionItem>


        {/* SPECIAL EDUCATION DEPARTMENT */}
        <AccordionItem>
          <AccordionButton>
            <Heading flex='1' size='sm'>
              Special Education Department
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Flex flexWrap='wrap' justifyContent='center'>
              <FacultyProfile name='Alfredo Manias' designation='Department Head' />
            </Flex>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>

    </Box>
  )
}

function FacultyProfile({ name, designation, department }) {
  return (
    <Box bgColor='gray.50' p={3} borderRadius={25} w='200px' m={2} boxShadow='md' >
      <Center mb={4} >
        <Image boxSize='175px' src={CTE_logo} objectFit='cover' borderRadius={25} />
      </Center>
      <Heading size='md'>{name}</Heading>
      <Text fontSize='sm' color='gray.600' mb={2}>{designation}</Text>
    </Box>
  )
}