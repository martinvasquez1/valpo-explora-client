import { useState } from 'react';
import usePlaces from '../hooks/usePlaces';
import { IconContext } from 'react-icons';
import { IoIosSearch } from 'react-icons/io';

import SearchBar from './SearchBar';
import Button from './Button';
import PlaceCard from './PlaceCard';
import ErrorResult from './ErrorResult';
import Spinner from './Spinner';

function SearchResults() {
  const { places, isLoading, isError } = usePlaces();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorResult />;

  return (
    <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
      {places.data.places.map((place) => {
        return <PlaceCard key={place._id} data={place} />;
      })}
    </div>
  );
}

export default function Places() {
  const [query, setQuery] = useState('');
  const [text, setText] = useState('');

  function search(e) {
    e.preventDefault();
    setQuery(text);
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="mx-auto max-w-5xl px-8 py-8">
        <h1 className="font-playfair text-4xl font-semibold text-slate-900">
          Lugares
        </h1>
        <form onSubmit={search} className="mt-8 flex">
          <SearchBar setText={setText} />
          <Button
            type="submit"
            variant="ghost"
            className="flex aspect-square items-center justify-center rounded-none rounded-br-xl rounded-tr-xl bg-blue-900 px-4 hover:bg-sky-600"
          >
            <IconContext.Provider value={{ size: '1.5em', color: '#fff' }}>
              <IoIosSearch />
            </IconContext.Provider>
          </Button>
        </form>
        <SearchResults />
      </div>
    </div>
  );
}
