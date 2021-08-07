import { Button, Flex, Heading, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface SearchBoxProps {}

export function SearchBox(props: SearchBoxProps) {
  return (
    <Flex direction="column" p="24" bg="purple.50" justify="center" rounded="2xl" my="6">
      <Heading fontWeight="light" textAlign="center" mb="16">
        Find perfect movie for <strong>evening</strong>
      </Heading>

      <Flex gridGap="4">
        <InputGroup>
          <InputLeftElement>
            <Icon as={BsSearch} color="gray.400" />
          </InputLeftElement>
          <Input variant="filled" type="search" placeholder="Search movies" />
        </InputGroup>

        <Button colorScheme="purple" textTransform="uppercase" px="8">
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

export default SearchBox;
