import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  margin-top: 5px;

  > svg {
    transition: 250ms ease;
  }

  &:hover > svg {
    transform: rotate(30deg);
    transition: 250ms ease;
  }

  &:active > svg {
    transform: rotate(-30deg);
    transition: 250ms ease;
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>

      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          EJM
        </Text>
      </LogoBox>

    </Link>
  );
}

export default Logo