import { IconContext } from 'react-icons';
import { IoIosCheckmark } from 'react-icons/io';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import useAddress from '../hooks/useAddress';

import Button from './Button.jsx';
import { Link } from 'react-router-dom';

const buttonStyles = cva(
  ['rounded-full border-2 border-gray-100 bg-white p-0'],
  {
    variants: {
      variant: {
        visited: ['bg-green-600 hover:bg-green-600'],
        lastVisited: ['bg-green-600 hover:bg-green-500'],
        notVisited: ['bg-gray-300 hover:bg-gray-300'],
        destiny: ['bg-blue-900'],
      },
    },
  },
);

const textStyles = cva([''], {
  variants: {
    variant: {
      visited: ['text-slate-900'],
      lastVisited: ['text-slate-900'],
      notVisited: ['text-gray-500'],
      destiny: ['text-slate-900'],
    },
  },
  defaultVariants: {
    variant: 'notVisited',
  },
});

export default function RouteDestiny({
  data,
  handleClick,
  disabled,
  variant,
  isLastDestiny,
}) {
  const { direction, isLoading, isError } = useAddress(data.lat, data.lng);

  return (
    <div className={twMerge(textStyles({ variant }), 'flex gap-2')}>
      <div className="flex flex-col items-center">
        <Button
          onClick={handleClick}
          className={twMerge(buttonStyles({ variant }))}
          disabled={disabled}
        >
          <IconContext.Provider value={{ size: '1.5em', color: '#fff' }}>
            <IoIosCheckmark />
          </IconContext.Provider>
        </Button>
        <div className="flex h-full justify-center">
          {!isLastDestiny && (
            <div className="h-full w-[2px] bg-slate-100"></div>
          )}
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <div className="flex-1">
          <div className="flex items-center">
            <Link
              to={`/lugares/${data._id}`}
              className="flex-1 truncate font-medium"
            >
              {data.name}
            </Link>
          </div>
        </div>
        <p className="truncate pb-4 text-slate-400">
          {isLoading ? '...' : isError ? '' : direction.address.road}
        </p>
      </div>
    </div>
  );
}
