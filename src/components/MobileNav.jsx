import Logo from './Logo';
import Button from './Button';

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
  return (
    <div className={isNavOpen ? 'block' : 'hidden'}>
      <div className="absolute right-2 top-2 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsNavOpen(false)}
          className="hover:bg-inherit"
        >
          X
        </Button>
      </div>
      <div className="fixed left-0 top-0 z-50 h-full w-3/4 bg-white p-4">
        <Logo />
        <nav className="mt-4">
          <ul className="flex h-full flex-col ">
            <li className="">
              <a
                href="#"
                className="flex w-full items-center gap-4 rounded-lg px-2 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="flex w-full items-center gap-4 rounded-lg px-2 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 "
              >
                Tour
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="black fixed left-0 top-0 z-40 h-full w-full bg-black opacity-55"></div>
    </div>
  );
}
