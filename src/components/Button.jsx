import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(['rounded-xl'], {
  variants: {
    variant: {
      default: ['bg-blue-900 hover:bg-sky-600 text-white'],
      ghost: ['hover:bg-gray-100'],
      destructive: [],
      link: [],
    },
    size: {
      default: ['px-8 py-2'],
      lg: ['px-14 py-4'],
      icon: ['p-2'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export default function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={twMerge(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}
