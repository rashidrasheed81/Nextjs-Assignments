import { Box, Container, Heading, Text, Button, Card, CardHeader, CardFooter, CardBody, Flex, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { IoSpeedometerSharp  } from 'react-icons/io5';
import { FaMoneyCheck  } from 'react-icons/fa';
import { IoMdSettings  } from 'react-icons/io';
import { FaHandPeace  } from 'react-icons/fa';





export default function Highlights() {
  return (
    <Box py={50} as='section'>
        <Box textAlign={'center'}>
            <Text color={'blue.500'} fontWeight={'bold'}>Highlights</Text>
            <Heading fontWeight={'semibold'} pb={'4'}>Why Chakra UI Pro?</Heading>
            <Text fontSize={'20'} px={{md:'280', base:'5'}} >Because these beautiful and responsive React components will help you realize your next idea in no time.</Text>
        </Box>


<Container maxW={1200} >
<SimpleGrid columns={{base:1, md:2, lg:4}} gap={5} pt={20}>
<Card align='center' >
  <CardHeader flexDirection={'column'}>
    <Center color={'blue.500'} pb={6}>
    <IoSpeedometerSharp size={70} />
    </Center>
    <Heading size='md' > Speed up your workflow</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>


<Card align='center'>
  <CardHeader>
  <Center color={'blue.500'} pb={6}>
    <FaMoneyCheck size={70}/>
    </Center>
    <Heading size='md'> Save good money</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>


<Card align='center'>
  <CardHeader>
  <Center color={'blue.500'} pb={6}>
    <IoMdSettings size={70}/>
    </Center>
    <Heading size='md' > Easily customizable</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>


<Card align='center'>
  <CardHeader>
  <Center color={'blue.500'} pb={6}>
    <FaHandPeace size={70}/>
    </Center>
    <Heading size='md'>Support Chakra UI</Heading>
  </CardHeader>
  <CardBody>
    <Text align={'center'}>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
</SimpleGrid>

</Container>






    </Box>

  )
}
