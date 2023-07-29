import NextLink from 'next/link'
import { Link, Container, Box, Heading, Button, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon, RepeatIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Image from 'next/image'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}>
      Hello, I&apos;m a Full-Stack Developer based in NYC!
    </Box>

    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Edmond Ma
        </Heading>  
        <p>( Developer / Designer / Photographer )</p>
      </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Edmond is a freelance and a full-stack developer based in NYC with
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his dogs and taking photos. 
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2008</BioYear>
          Messing around with MySpace websites, early HTML/CSS, and hacking video games.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Customizing Tumblr theme templates, interest in Comp Sci. and building automated programs.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated B.S. from University at Buffalo in MIS.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Working as IT Support, started self-study web development out of curiosity.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Front-end developer for Modelfy, and freelance developer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Doggos, Food, Calisthenics, Gaming, {' '}
          <Link href="https://blog-v3-five.vercel.app/" target="_blank">
            Blogging
          </Link>
          , One Piece
        </Paragraph>
      </Section>
    </Container>
    )
}

export default Page