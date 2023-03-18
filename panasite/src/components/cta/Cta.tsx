import { Box, Button, Container, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

export default function Cta() {
  const {colorMode} = useColorMode();
  return (
    <Box >
        <Container maxW={1200} bg={colorMode=='light' ? 'blue.50': 'black'} p={35}>
            <Stack direction={{md:'row', base:'column'}}>
        <Box flex={3} py={8}>
        <Heading pb={4}>Try our free components</Heading>
        <Text fontSize={'20px'} pr={{md:30, base:5}}>You don&apos;t have to buy a pig in a poke - you can experience our free community components before making a purchase decision.</Text>
        </Box>
        <Box flex={1} alignSelf='flex-start' pt={5} >            
        <Button colorScheme={'blue'} float='right'>View Components</Button>
        </Box>
            </Stack>
        </Container>
        </Box>
  )
}
