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
      <Heading mt={6} mb={6} as="h1">Not Found 😱</Heading>
      <Text>Error 404 - Page you're looking for can't be found or does not exist.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound