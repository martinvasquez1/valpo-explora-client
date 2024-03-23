import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-10 py-10">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 px-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <Logo />
          <p className="pt-1">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center justify-center gap-6 sm:gap-4">
          Social media
        </div>
      </div>
    </footer>
  );
}
