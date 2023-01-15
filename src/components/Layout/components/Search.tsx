import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { Link } from 'gatsby';
import {
  useApiLinks, useAppContext, useDebounce,
} from '@/hooks';
import {
  ResultsWrapper,
  SearchButton, SearchForm, SearchInput, SearchNode, SearchResults,
} from '../Layout.styled';
import {
  backendUrl, Endpoints, Spyglass,
} from '@/static';
import { SearchProps } from '../Layout.types';
import { SearchResult } from '@/types';

const Result = ({ item }: { item: SearchResult }) => {
  const url = useApiLinks(item.url);

  if (item.subtype === 'post') return null;

  return <li><Link to={url}>{item.title}</Link></li>;
};

export const Search = ({
  placeholder, searchMessages, toggle,
}: SearchProps) => {
  const { lang } = useAppContext();
  const [isSearching, setSearching] = useState(false);
  const [message, setMessage] = useState(searchMessages.searching);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<SearchResult>>([]);
  const debouncedValue = useDebounce(query);

  const handleApiCall = async () => {
    const response = await fetch(`${backendUrl}/${Endpoints.SEARCH}?search=${debouncedValue}&lang=${lang}`);
    const result = await response.json();

    if (result.length > 0) {
      setResults(result);
      setMessage(searchMessages.results);
    }

    if (result.length === 0) {
      setMessage(searchMessages.noResults);
      setResults([]);
    }

    setSearching(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(searchMessages.searching);
    setSearching(true);
    setQuery(event.currentTarget.value);
  };

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (event.type === 'submit') {
      handleApiCall();
    } else {
      setQuery('');
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      handleApiCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <SearchNode>
      <SearchForm onReset={handleForm} onSubmit={handleForm}>
        <SearchButton>
          <Spyglass />
        </SearchButton>
        <SearchInput
          id="search" name="search"
          onChange={handleChange}
          placeholder={placeholder} value={query}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="visually-hidden" htmlFor="search">search</label>
        <SearchButton onClick={toggle} type="button">⨉</SearchButton>
      </SearchForm>
      {(results.length > 0 || isSearching || query) && (
        <ResultsWrapper>
          {(isSearching || query) && <p>{message}</p>}
          <SearchResults>
            {results.length > 0 && results.map(item => <Result item={item} key={item.url} />)}
          </SearchResults>
        </ResultsWrapper>
      )}
    </SearchNode>
  );
};
