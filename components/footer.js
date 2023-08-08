import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.69} fontSize="sm">
      &copy; {new Date().getFullYear()} - Developed with ❤️ by Edmond Ma
    </Box>
  )
}

export default Footer