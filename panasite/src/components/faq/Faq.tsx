import { Box, Heading, HStack, Text, Flex, Container, Button } from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function Faq() {
  return (
    <Box>
        <Container maxW={1200} my={16}>
        <Flex flexDirection={{base: 'column', md:'row'}}>

        <Box flex={2} textAlign={{base:'center', md:'left'}}>
            <Text color={'blue.500'} fontWeight={'bold'} pb={2}>Support</Text>
            <Heading fontWeight={'semibold'} pb={3}>FAQs</Heading>
            <Text >Everything you need to know about the product and billing. For questions about licensing, please see our licensing page.</Text>

        </Box>

        <Box flex={3} pt={{base:15, md:0}}>
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
   
<Button display={'block'} m='auto' mt={5}>Show more</Button>

        </Box>
        </Flex>
        </Container>
    </Box>
  )
}
