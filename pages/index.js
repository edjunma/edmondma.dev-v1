import NextLink from 'next/link'
import { Link, Container, Box, Heading, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import { LinkIcon, EmailIcon, CopyIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" mt={6} mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)'}}>
        Hello there ✌️,  I'm a Full-Stack Developer based in NYC!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Edmond Ma
          </Heading>  
          <p>( Developer / Designer / Dog Dad )</p>
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
            About Me
          </Heading>
          <Paragraph>
            Full-Stack Developer with a focus on front end technologies and a passion for building digital products & cozy aesthetic websites. While I'm online, you can always either catch me learning something new or fiddling with a new project to launch. When I'm offline, I love
            to spend time with my dogs {' '} 
            <Link href="https://www.instagram.com/heihei.and.elsa/" target="_blank">
              @heihei.and.elsa
            </Link>, exercise, cook various cuisines, and these days attempt photography and video editing.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<LinkIcon />}
              colorScheme="teal"
            >
              View Projects
            </Button>
          </Box>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://edjunma.github.io/EJM-Resume/"
              scroll={false}
              rightIcon={<CopyIcon />}
              colorScheme="orange"
              target="_blank"
            >
              View Resume
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2008</BioYear>
            Messing around with MySpace websites fumbling around with HTML/CSS and hacking video games.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Customized Tumblr theme templates, gained an interest in Comp Sci. and building automated programs & bots.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated B.S. from University at Buffalo in MIS.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked as Desktop IT Support, began to self-study web development out of interest and curiosity.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Front-end Developer for Modelfy, and Freelance Developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Passions ♥
          </Heading>
          <Paragraph>
            🐶 Dogs, Boxing, Calisthenics, Archery, PC Building & Gaming, Cooking, Traveling, One Piece, and recently {' '}
            <Link href="https://blog-v3-five.vercel.app/" target="_blank">
              Blogging.
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
          <ListItem>
              <Link href="https://linkedin.com/in/edjunma" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<IoLogoLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/edjunma" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoGithub />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/edjunma" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  Twitter X
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/edmondma.dev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoInstagram />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
          </List>

          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>
        <p>
          Please feel free to reach out to me through my social media links above or email me directly. I look forward to chatting soon! 😊☕
        </p>

        <Box align="center" my={6}>
          <Button
            as={NextLink}
            href="mailto:edjunma@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Email Me
          </Button>
        </Box>
        </Section>
      </Container>
    </Layout>
    )
}

export default Page