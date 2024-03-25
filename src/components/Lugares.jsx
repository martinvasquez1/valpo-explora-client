import { useState } from 'react';

import SearchBar from './SearchBar';

export default function Lugares() {
  const [query, setQuery] = useState('');
  const [text, setText] = useState('');

  function search(e) {
    e.preventDefault();
    setQuery(text);
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-8 py-10">
        <h1 className="font-playfair text-3xl font-semibold text-slate-900">
          Lugares
        </h1>
        <form onSubmit={search}>
          <SearchBar setText={setText} />
          {/*<Activities />*/}
          <button type="submit">Hi</button>
        </form>
      </div>
    </div>
  );
}
