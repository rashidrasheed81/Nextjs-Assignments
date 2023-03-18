"use client";
import React from "react";
import { Box, Heading, Text, HStack, Image, Button,Flex, Hide,  } from "@chakra-ui/react";
import Link from "next/link";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function TopContainer() {
  return (
    <Box as="section" backgroundImage={'/images/bg.webp'} backgroundSize='contain' backgroundAttachment={'fixed'} py='20'>
        <HStack >
      <Box w={{base:'100%', lg:'50%'}} color={'white'} pl={{base:'10', lg:'44'}}>
        <Heading fontSize={'60'}>Build your next idea even faster</Heading>
        <Text lineHeight={"8"}>
          One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
          3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
          Computing/IoT Technologies
        </Text>
        <Box mt={'5'}>
        <Button colorScheme={'blue'} mr='3' >Buy Now</Button>
        <Button colorScheme={'blue'} variant={'outline'} >View Components</Button>
        </Box>
        <Flex alignItems={'center'}>
        <AvatarGroup size='md' max={3} mt={'5'}>
        <Avatar name='Zia Khan' src='/images/Zia.webp' />
        <Avatar name='Daniyal Nagori' src='/images/daniyal.jpeg' />
        <Avatar name='adil Khan' src='/images/adil.jpeg' />
        <Avatar name='Zeeshan' src='/images/zeeshan.jpeg' />
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </AvatarGroup>
      <Text mt={'8'} ml={'5'} fontFamily={'serif'} fontStyle={'italic'}>Created By:<Link color="blue" target={'_blank'} href={'https://github.com/rashidrasheed81'}> Rashid R</Link ></Text>
      </Flex>
      </Box>      
    <Hide below="lg">
      <Box w='50%'>
        <Image src='/images/fpi1.png' alt='firstlogo'/>
      </Box>
    </Hide>
      </HStack>
    </Box>
  );
}
