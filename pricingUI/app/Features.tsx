import React from 'react'
import { Box, Text, HStack, Icon, Flex } from '@chakra-ui/react'
import { CheckCircleIcon, BellIcon,RepeatClockIcon, WarningTwoIcon } from '@chakra-ui/icons'


export default function Features() {
  return (
    
    <Box maxWidth= '800px' margin={'auto'} mt='25px' paddingInline={'40px'} px='50px'>
        <Flex direction={{base: 'column', lg:'row'}}>
        <HStack mb={'20px'}>
        <Icon as={BellIcon} color='#652CD3' />
        <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mb={'20px'}>
        <Icon as={WarningTwoIcon} color='#652CD3' />
        <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb={'20px'}>
        <Icon as={RepeatClockIcon} color='#652CD3' />
        <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
        </Flex>

    </Box>
  )

}

