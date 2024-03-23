export default function DesktopNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-8 text-slate-900">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Lugares</a>
        </li>
        <li className="rounded-xl bg-sky-600 px-8 py-2 text-white">
          <a href="#">Tour</a>
        </li>
      </ul>
    </nav>
  );
}
