import {
  Button,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Hero(props: FlexProps) {
  return (
    <Flex
      as="section"
      direction="column"
      px="24"
      py="12"
      bg="purple.50"
      justify="center"
      rounded="2xl"
      my="6"
      {...props}
    />
  );
}

function HeroHeading(props: HeadingProps) {
  return <Heading fontWeight="light" textAlign="center" my="12" fontFamily="'Inter'" {...props} />;
}

interface SearchFieldProps extends FlexProps {
  placeholder?: string;
  onSearch: (term: string) => void;
}

function SearchField({ onSearch, placeholder, ...flexProps }: SearchFieldProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Flex align="center" gridGap="6" my="8" {...flexProps}>
      <InputGroup size="lg">
        <InputLeftElement align="center">
          <Icon as={BsSearch} color="gray.400" />
        </InputLeftElement>
        <Input
          variant="filled"
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch(searchTerm)}
          placeholder={placeholder}
          bg="white"
          _hover={{ backgroundColor: 'white' }}
          _focus={{ backgroundColor: 'white', border: '2px', borderColor: 'purple.500' }}
        />
      </InputGroup>
      <Button colorScheme="purple" textTransform="uppercase" px="8" onClick={() => onSearch(searchTerm)}>
        Search
      </Button>
    </Flex>
  );
}

/* eslint-disable-next-line */
export interface SearchBoxProps {}

export function SearchBox(props: SearchBoxProps) {
  const navigate = useNavigate();

  return (
    <Hero>
      <HeroHeading>
        Find perfect movie for <strong>evening</strong>
      </HeroHeading>

      <SearchField
        placeholder="Search movies"
        onSearch={searchTerm => {
          const query = new URLSearchParams();
          query.set('q', searchTerm);
          navigate({ pathname: 'results', search: `?${query.toString()}` });
        }}
      />
    </Hero>
  );
}

export default SearchBox;
