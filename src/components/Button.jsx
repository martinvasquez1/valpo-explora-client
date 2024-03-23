import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(['rounded-md'], {
  variants: {
    variant: {
      default: ['bg-indigo-500 hover:bg-indigo-300'],
      ghost: ['hover:bg-gray-100'],
      destructive: [],
      link: [],
    },
    size: {
      default: [],
      lg: ['px-5 py-9'],
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
