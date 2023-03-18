import { Box, Text, Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa'
import Link from 'next/link'


export default function Footer() {
  return (
    <>
    <Box>
        <Container maxW={'100%'} bg='blackAlpha.100' py={5}>
            <Flex justifyContent={'space-around'} alignItems='center'>                
        <Text color={'grey'}>© 2023 Panaverse. All rights reserved.</Text>
        <HStack>
            <Box pl={15} as='span' color={'grey'}>
                <Link href={'https://github.com'} target='_blank'>
                    <FaGithub size={25} /></Link>
            </Box>
            <Box pl={15} as='span' color={'grey'}>
                <Link href={'https://facebook.com'} target='_blank'>
                <FaFacebook size={25} /></Link>
                
            </Box>
            <Box pl={15} as='span' color={'grey'}>
                <Link href={'https://discord.com'} target='_blank' >
                    <FaDiscord size={25} /></Link>               
            </Box>

        </HStack>

            </Flex>
        </Container>

    </Box>
    </>
  )
}
