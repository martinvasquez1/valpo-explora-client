import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from './Logo';
import Button from './Button';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav.jsx';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
        <Logo />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsNavOpen(true)}
          className="sm:hidden"
        >
          <IconContext.Provider value={{ size: '1.5em', color: '#0f172a' }}>
            <RxHamburgerMenu />
          </IconContext.Provider>
        </Button>
        <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <DesktopNav />
      </header>
    </div>
  );
}
