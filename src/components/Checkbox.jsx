export default function Checkbox({ name, text }) {
  return (
    <label
      htmlFor={name}
      className="flex items-center gap-2 rounded-xl border-[1px] border-[#ccc] bg-white px-4 py-2 focus:border-blue-500"
    >
      <input type="checkbox" name={name} id={name} />
      <span className="text-sm text-slate-700">{text}</span>
    </label>
  );
}
