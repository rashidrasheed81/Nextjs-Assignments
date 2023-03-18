import { List, Stack, useColorMode, ListItem } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

export default function NavMenu() {
  const { colorMode } = useColorMode();
    return (
        <>
        <List fontWeight={'bold'} color={colorMode == 'light' ? "4A5568" : "white"}>
            <Stack spacing={6} ml='40px' fontWeight={'bold'} direction={{base: "column", md:"row"}} align={{base: 'left', md: 'center'}}>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>


                {/* <ListItem>Contact</ListItem> */}
            </Stack>
        </List>
        </>
    
  )
}
