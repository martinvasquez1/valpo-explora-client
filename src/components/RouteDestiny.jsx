import { IconContext } from 'react-icons';
import { IoIosCheckmark } from 'react-icons/io';
import useAddress from '../hooks/useAddress';

import Button from './Button.jsx';

export default function RouteDestiny({ data, handleClick, disabled }) {
  const { direction, isLoading, isError } = useAddress(data.lat, data.lng);

  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <Button
          onClick={handleClick}
          className="rounded-full border-2 border-gray-100 bg-white p-0"
          disabled={disabled}
        >
          <IconContext.Provider value={{ size: '1.5em', color: '#000' }}>
            <IoIosCheckmark />
          </IconContext.Provider>
        </Button>
        <div className="flex h-full justify-center">
          <div className="h-full w-[2px] bg-blue-900"></div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex-1">
          <div className="flex items-center">
            <div className="flex-1 truncate font-medium text-slate-900">
              {data.name}
            </div>
          </div>
        </div>
        <div className="flex-1 pb-4">
          <span className="truncate text-slate-500">
            {isLoading ? '...' : isError ? '' : direction.address.road}
          </span>
        </div>
      </div>
    </div>
  );
}
