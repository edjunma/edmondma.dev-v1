import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Edmond's Portfolio" />
        <meta name="author" content="Edmond Ma" />
        <meta name="author" content="edjunma" />
        <meta name="twitter:title" content="Edmond Ma" />
        <meta name="twitter:site" content="@edjunma" />
        <meta name="twitter:creator" content="@edjunma" />
        <meta property="og:site_name" content="Edmond Ma" />
        <meta name="og:title" content="Edmond Ma" />
        <meta property="og:type" content="website" />
        <title>Edmond Ma | Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main