export default function SearchBar({ setText }) {
  return (
    <input
      type="text"
      name="query"
      placeholder="Tu busqueda"
      className="w-full rounded-bl-xl rounded-tl-xl border-b-2 p-4 py-3 text-lg text-slate-700"
      onChange={(e) => setText(e.target.value)}
    />
  );
}
