import { Box, Button, Container, Heading, HStack, Input, Text, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'

export default function Newsletter() {
  const {colorMode} = useColorMode();

  return (
    <>
    <Box >
        <Container bg={colorMode=='light' ? 'blue.50': 'black'} maxW={'100%'} py={10}>
            <Flex justifyContent={'space-around'} flexDirection={{base:'column', md:'row'}}>                
            <Box>
            <Heading pb={1} fontWeight={'semibold'}>Join our Newsletter</Heading>
            <Text>Dont miss any more news and subscribe to our newsletter today.</Text>
            </Box>
            <Box pt={5}>
                <HStack>
            <Input placeholder='Enter your email' />
            <Button width={'150'}>Subscribe</Button>
                </HStack>
            </Box>

            </Flex>
        </Container>
    </Box>
    </>
  )
}
