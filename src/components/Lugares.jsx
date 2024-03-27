import { useState } from 'react';

import SearchBar from './SearchBar';
import Button from './Button';
import { IconContext } from 'react-icons';
import { IoIosSearch } from 'react-icons/io';
import PlaceCard from './PlaceCard';

const amountResults = 14;

export default function Lugares() {
  const [query, setQuery] = useState('');
  const [text, setText] = useState('');

  function search(e) {
    e.preventDefault();
    setQuery(text);
  }

  const mockPlaces = [];

  for (let i = 0; i < amountResults; i++) {
    const data = {
      name: 'Lorem ipsum',
      imgSrc: 'https://source.unsplash.com/random/?valparaiso' + '&' + i,
      id: i,
    };
    mockPlaces.push(data);
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
        <div>
          <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            {mockPlaces.map((place) => {
              return <PlaceCard key={place.id} data={place} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
