import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading mt={6} mb={6} as="h1" align="center">Not Found 😱</Heading>
      <Text align="center" fontWeight="bold">Error 404</Text>
      <Divider my={6} />
      <Text align="center">The page you're looking for can't be found or doesn't exist.</Text>
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound