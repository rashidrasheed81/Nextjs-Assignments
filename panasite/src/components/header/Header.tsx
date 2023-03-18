'use client';
import React from 'react'
import { Heading, Box, Image, List, ListItem, HStack, Flex, Button, IconButton, Show, Hide, useColorMode } from "@chakra-ui/react";
import { ExternalLinkIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'
import { GiHamburgerMenu } from 'react-icons/gi';
import NavMenu from './NavMenu';
import Burger from './Burger';
import {ColorModeSwitcher} from './ColorModeSwitcher';


export default function Header() {
  const {colorMode} = useColorMode();
  return (
    <Box as='section' position='sticky' top={0} zIndex={1} >
      {/* left */}
<Flex justifyContent={'space-around'} alignItems={'center'} bg={colorMode=='dark' ? 'black': 'white'} py={2}>
      <Box>
        <HStack>
        <Image src="/images/logo.webp" alt={'panalogo'} />

        <Show above='md'>
          <HStack>
            <NavMenu/>
          </HStack>
        </Show>

        <Hide below='md'>
        {/* <List >
          <HStack align={'center'} spacing={6} ml='40px' fontWeight={'bold'}>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          </HStack>
        </List> */}
        </Hide>
        </HStack>
      </Box>
      {/* right */}
<HStack>
  <Box pl={15}>
<SearchIcon w={"25"} h={"25"}/>

</Box>
{/* <Box pl={15}>
<MoonIcon w={"25"} h={"25"} />
</Box> */}
<ColorModeSwitcher/>
<Show  below='md'>
<Burger/>
</Show>

  <Button variant={'outline'} ><ExternalLinkIcon />Go to Piaic</Button>
 
</HStack>
</Flex>

    </Box>
  )
}
