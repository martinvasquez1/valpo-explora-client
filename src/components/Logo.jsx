import { twMerge } from 'tailwind-merge';

export default function Logo({ className }) {
  return (
    <div className={twMerge('text-xl font-bold text-black', className)}>
      ValpoExplora
    </div>
  );
}
