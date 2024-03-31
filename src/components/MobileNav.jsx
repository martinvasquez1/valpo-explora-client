import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Button from './Button';

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
  return (
    <div className={isNavOpen ? 'block' : 'hidden'}>
      <div className="fixed left-0 top-0 z-[2000] h-full w-full bg-[#f5fdff] p-6">
        <div className="flex items-center justify-between px-2">
          <Logo />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsNavOpen(false)}
            className="hover:bg-sky-100"
          >
            <IconContext.Provider value={{ size: '1.5em', color: '#000' }}>
              <IoCloseOutline />
            </IconContext.Provider>
          </Button>
        </div>
        <nav className="mt-4">
          <ul className="flex h-full flex-col ">
            <li className="">
              <Link
                to="/"
                onClick={() => setIsNavOpen(false)}
                className="flex w-full items-center gap-4 rounded-lg px-4 py-4 text-gray-600 hover:bg-sky-100 hover:text-gray-900"
              >
                Inicio
              </Link>
            </li>
            <li className="">
              <Link
                to="/lugares"
                onClick={() => setIsNavOpen(false)}
                className="flex w-full items-center gap-4 rounded-lg px-4 py-4 text-gray-600 hover:bg-sky-100 hover:text-gray-900"
              >
                Lugares
              </Link>
            </li>
            <li className="">
              <Link
                to="/tour"
                onClick={() => setIsNavOpen(false)}
                className="flex w-full items-center gap-4 rounded-lg px-4 py-4 text-gray-600 hover:bg-sky-100 hover:text-gray-900 "
              >
                Tour
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
