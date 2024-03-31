import { Link } from 'react-router-dom';

export default function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-8 text-slate-900">
        <li>
          <Link to="/" className="font-medium">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/lugares" className="font-medium">
            Lugares
          </Link>
        </li>
        <li>
          <Link
            to="/tour"
            className="rounded-xl bg-blue-900 px-8 py-2 font-semibold text-white hover:bg-sky-600"
          >
            Tour
          </Link>
        </li>
      </ul>
    </nav>
  );
}
