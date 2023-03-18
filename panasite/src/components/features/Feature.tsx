import { StarIcon } from '@chakra-ui/icons'
import { Box, Heading, Text,HStack, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineStar  } from 'react-icons/ai';
import { IoIosRocket } from 'react-icons/io';
import { FiMoon } from 'react-icons/fi';
import { FaPaintBrush } from 'react-icons/fa';
import { HiCodeBracket } from 'react-icons/hi2';
import { FaWheelchair } from 'react-icons/fa';


export default function Feature() {
  return (
    <>
    <Box py={'10'} as={'section'}>        
        <Box  textAlign={'center'}>
        <Text color={'blue.500'} fontWeight={'bold'}>Features</Text>
        <Heading fontWeight={'semibold'} pb={'4'}>What you can expect?</Heading>
        <Text fontSize={'20'} px={{lg:'220', base:'5'}} >A bundle of 220+ ready-to-use, responsive and accessible components with clever structured sourcecode files.            
        </Text>
        </Box>

        <Container maxW='1200' mt={10}>
        <Box>     
            <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10}>           
            <Box>
                <HStack>    
                <Box color={'blue.500'}>      
                <AiOutlineStar size={35}  />
                </Box>
                <Box>
                <Heading fontSize={18}>220+ Components</Heading>
                <Text>All our components come with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>


            <Box>
                <HStack>  
                <Box color={'blue.500'}> 
                <IoIosRocket size={30}/> 
                </Box>                 
               
                <Box>
                <Heading fontSize={18}>Themable</Heading>
                <Text>Your style. Your brand. Customize the components as you need them. It&apos;s that simple.</Text>
                </Box>
                </HStack>
            </Box>

            <Box>
                <HStack> 
                <Box color={'blue.500'}>                    
                <FiMoon size={30} />
                </Box>
                <Box>
                <Heading fontSize={18}>Light & Dark</Heading>
                <Text>All our components come with a light and dark color mode by default.</Text>
                </Box>
                </HStack>
            </Box>


            <Box>
                <HStack>  
                <Box color={'blue.500'}>                   
                <FaPaintBrush size={30} />
                </Box>
                <Box>
                <Heading fontSize={18}>Themable</Heading>
                <Text>Your style. Your brand. Customize the components as you need them. It&apos;s that simple.</Text>
                </Box>
                </HStack>
            </Box>


            <Box>
                <HStack>  
                <Box color={'blue.500'}>                  
                <HiCodeBracket size={30} />
                </Box>
                <Box>
                <Heading fontSize={18}>Developer Friendly</Heading>
                <Text>Components are semantically divided into several files for better developer experience.</Text>
                </Box>
                </HStack>
            </Box>


            <Box>
                <HStack>                
                <Box color={'blue.500'}>
                <FaWheelchair size={30} />
                </Box>    
                <Box>
                <Heading fontSize={18}>Accessible</Heading>
                <Text>Accessibility first. That&apos;s why we pay attention to accessibility right from the start.</Text>
                </Box>
                </HStack>
            </Box>
            </SimpleGrid>



        </Box>
        </Container>

    </Box>
    </>
  )
}
