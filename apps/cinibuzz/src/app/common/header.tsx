import { Box, Button, Flex } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Flex as="header" align="center" px="4" py="3">
      <Box as="strong" color="purple.500">
        Cinibuzz
      </Box>
      <Button variant="ghost" ml="auto">
        Movies
      </Button>
      <Button variant="ghost">TV Shows</Button>
      <Button variant="ghost">Kids</Button>
    </Flex>
  );
}

export default Header;
