import { Box, BoxProps, Button, ButtonProps, Flex, FlexProps } from '@chakra-ui/react';
import { Link, LinkProps } from 'react-router-dom';

function Brand(props: BoxProps) {
  return (
    <Box
      as={Link}
      to="/"
      color="purple.600"
      fontFamily="'Baloo Bhai 2'"
      fontWeight="extrabold"
      fontSize="4xl"
      {...props}
    />
  );
}

function NavLink(props: ButtonProps & LinkProps) {
  return <Button as={Link} variant="ghost" fontWeight="normal" {...props} />;
}

function Navbar(props: FlexProps) {
  return <Flex as="header" align="center" px="12" py="3" {...props} />;
}

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Navbar>
      <Brand>Cinibuzz</Brand>
      <Flex flex="1" />
      <NavLink to="movies">Movies</NavLink>
      <NavLink to="tv-shows">TV Shows</NavLink>
      <NavLink to="kids">Kids</NavLink>
    </Navbar>
  );
}

export default Header;
