import { Button, Flex, Heading, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SearchBoxProps {}

export function SearchBox(props: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    const query = new URLSearchParams();
    query.set('q', searchTerm);

    navigate({ pathname: 'results', search: `?${query.toString()}` });
  }, [navigate, searchTerm]);

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
          <Input
            variant="filled"
            type="search"
            placeholder="Search movies"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
        </InputGroup>

        <Button colorScheme="purple" textTransform="uppercase" px="8" onClick={handleSearch}>
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

export default SearchBox;
