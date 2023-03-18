import React from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box, Button, Input, useDisclosure, 
  } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import NavMenu from './NavMenu';

  
export default function Burger() {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const btnRef = React.useRef();
      
        return (
          <>
          
            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
              Open
            </Button> */}
            <Box onClick={onOpen}>
                <GiHamburgerMenu size={25}/>
            </Box>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
            //   finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Panaverse</DrawerHeader>
      
                <DrawerBody>
                  {/* <Input placeholder='Type here...' /> */}
                  <NavMenu/>
                </DrawerBody>
      
                <DrawerFooter>
                    <Image width={100} height={51} src='/images/Logo.webp' alt='pic'/>
                  {/* <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue'>Save</Button> */}
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }