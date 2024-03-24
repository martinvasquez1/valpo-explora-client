export default function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-8 text-slate-900">
        <li>
          <a href="#" className="">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="">
            Lugares
          </a>
        </li>
        <li>
          <a
            className="rounded-xl bg-blue-900 px-8 py-2 text-white hover:bg-sky-600"
            href="#"
          >
            Tour
          </a>
        </li>
      </ul>
    </nav>
  );
}
