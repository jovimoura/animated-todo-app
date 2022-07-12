import React from 'react'
import {
  Box,
  Text,
  VStack,
  ScrollView,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      w="full"
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}>
      <Masthead
        title="About this app and me"
        image={require('../assets/images/about-masthead.png')}>
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        mt="-20px"
        pt="30px"
        p={4}
        bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <VStack space={4} flex={1}>
          <Box alignItems="center">
            <Image
              borderRadius="full"
              resizeMode="cover"
              w={120}
              alt="perfil"
              h={120}
              source={require('../assets/images/jovimoura.png')}
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React native To do list, made with animation libs. To see
            more projects:
          </Text>
          <LinkButton
            colorScheme="darkBlue"
            size="lg"
            borderRadius="full"
            leftIcon={<Icon as={Feather} name="info" size="sm" opacity={0.5} />}
            href="https://portfolio-jovimoura.vercel.app/">
            Check my Portfolio
          </LinkButton>
          <LinkButton
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
            href="https://github.com/jovimoura">
            Check my Github
          </LinkButton>
          <LinkButton
            colorScheme="blue"
            size="lg"
            borderRadius="full"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
            href="https://www.linkedin.com/in/jovimoura10/">
            Check my LinkedIn
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
