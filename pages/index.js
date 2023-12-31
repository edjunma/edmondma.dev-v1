import NextLink from 'next/link'
import { Link, Container, Box, Heading, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import { LinkIcon, EmailIcon, CopyIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

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
            <Tilt  
              tiltReverse={true}
              perspective="300"
              transitionSpeed={2500}
              scale={1.08}
              >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="double"
                w="110px"
                h="110px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile image"
                  width="110"
                  height="110"
                />
              </Box>
              </Tilt>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            Full-Stack Developer focused on front-end technologies with a passion for developing digital products & cozy aesthetic websites. When offline, I love to spend time with my dogs {' '}
            <Link href="https://www.instagram.com/heihei.and.elsa/" target="_blank">
              @heihei.and.elsa
            </Link>
            , chef up my favorite comfort meals, exercise because health is wealth, and recently have been fiddling with VR Development, photography, and video editing.
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
            Bio Timeline
          </Heading>
          <BioSection>
            <BioYear>2012</BioYear>
            Customized Tumblr theme templates, gained an interest in Comp Sci. and building automated programs & bots.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Designed and sold video game assets/templates and Wordpress starter websites that were profitable.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated B.S. from University at Buffalo in Business Administration and Management Information Systems.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked as Desktop Support & IT Support Specialist, began to self-study web development out of interest and curiosity.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked as Front-end Developer for Modelfy.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Working as a Freelance Full-Stack Developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>

          <Heading as="h3" variant="section-title">
            Passions & Hobbies ♥
          </Heading>
          
          <Paragraph>
            🐶🌱 Dogs & Plants, Archery, Boxing, MMA, Calisthenics, Food & Home Cooking, PC Building, VR Development, Tech & EDC gear, Traveling, Photography, Videography and recently {' '} 
            <Link href="https://blog-v3-five.vercel.app/" target="_blank">
              Blogging 
            </Link>
            {' '} in my little corner of the internet about my experiences.
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
          Please feel free to reach out to me through my social media links above or email me directly with the button below. Ask me anything! I look forward to chatting & working with you soon! 😊☕
        </p>

        <Box align="center" my={6}>
          <Button
            as={NextLink}
            href="mailto:edjunma@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            title="edjunma@gmail.com"
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