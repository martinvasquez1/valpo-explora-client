export default function Checkbox({ name, text, handleClick}) {
  return (
    <label
      htmlFor={name}
      className="flex items-center gap-2 rounded-xl border-[1px] border-[#ccc] bg-white px-4 py-2 focus:border-blue-500"
    >
      <input type="checkbox" name={name} id={name} onClick={handleClick} />
      <span className="text-sm text-slate-700">{text}</span>
    </label>
  );
}
