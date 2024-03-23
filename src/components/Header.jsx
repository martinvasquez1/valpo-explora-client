import { useState } from 'react';

import Logo from './Logo';
import Button from './Button';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav.jsx';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="relative mx-auto flex max-w-5xl items-center justify-between p-4">
      <Logo />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsNavOpen(true)}
        className="sm:hidden"
      >
        Menu Icon
      </Button>
      <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <DesktopNav />
    </header>
  );
}
