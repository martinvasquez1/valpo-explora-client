import Button from './Button';
import { IconContext } from 'react-icons';
import { IoIosSearch } from 'react-icons/io';

export default function SearchBar({ setText }) {
  return (
    <div className="mt-4 flex">
      <input
        type="text"
        name="query"
        placeholder="Search by keyword or artist"
        className="w-full border-b-2 border-slate-900 px-6 py-3 text-lg text-slate-700 focus:border-0"
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <Button
          type="submit"
          variant="ghost"
          className="flex aspect-square items-center justify-center px-4"
        >
          <IconContext.Provider value={{ size: '1.5em', color: 'fefefe' }}>
            <IoIosSearch />
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
}
