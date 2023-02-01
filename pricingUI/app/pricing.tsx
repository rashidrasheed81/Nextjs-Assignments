import React from 'react'
import {Box, Heading, Text, Flex, Button, HStack, Icon } from '@chakra-ui/react'
// import checkMarkIcon from './checkMarkIcon'
import { CheckCircleIcon } from '@chakra-ui/icons'




export default function Pricing() {
  return (
    <Box maxWidth={'950px'} ml={{base:'20px', lg:'auto'}} mr={{base:'20px', lg:'auto'}} marginTop={'-150px'} backgroundColor='white' borderRadius={'16px'} overflow='hidden' boxShadow='0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)'>
        <Flex direction={{ base:'column', md:'column', lg:'row'}}>
          {/* left box */}
        <Box bg={"#Cbb8ee"} p="40px" textAlign={'center'}>
            <Text fontSize={"24px"} fontWeight={'bold'} >Premium PRO</Text>
            <Heading fontSize={"60px"}>$329</Heading>
            <Text>billed just once</Text>
            <Button mt={'20px'} w ='282px' color={'white'} bg={"#805AD5"}>
              Get Started</Button>
        </Box>
        {/* right box */}
        <Box paddingTop="50px" pl="25px" pr='10px' >
          <Text marginBottom={'10px'}>
            Access these features when you get this pricing package for your business</Text>
          <HStack mb={'15px'}>            
              {/* <Icon as={checkMarkIcon} /> */}
              <Icon as={CheckCircleIcon} color='#652CD3' />
              <Text>International calling and messaging API</Text>                      
          </HStack>
          <HStack mb={'15px'}>            
              <Icon as={CheckCircleIcon} color='#652CD3' />
              <Text>Additional phone numbers</Text>                      
          </HStack >
          <HStack mb={'15px'}>            
              <Icon as={CheckCircleIcon} color='#652CD3' />
              <Text>Automated messages via Zapier</Text>                      
          </HStack>
          <HStack mb={'15px'}>            
              <Icon as={CheckCircleIcon} color='#652CD3' />
              <Text>24/7 support and consulting</Text>                      
          </HStack>
          </Box>
        </Flex>
    </Box>
  )
}
