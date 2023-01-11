import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useDebounce } from '@/hooks';
import {
  SearchButton, SearchForm, SearchInput, SearchNode,
} from '../Layout.styled';
import { Spyglass } from '@/static';
import { SearchProps } from '../Layout.types';

export const Search = ({ placeholder, toggle }: SearchProps) => {
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query);

  const handleApiCall = () => {
    console.log(debouncedValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    </SearchNode>
  );
};
