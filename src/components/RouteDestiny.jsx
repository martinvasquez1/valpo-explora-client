import { IconContext } from 'react-icons';
import { IoIosCheckmark } from 'react-icons/io';

import Button from './Button.jsx';

export default function RouteDestiny({}) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <Button className="rounded-full border-2 border-gray-100 bg-white p-0">
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
              Lorem ipsum, dolor sit amet
            </div>
          </div>
        </div>
        <div className="flex-1 pb-4">
          <span className="truncate text-slate-500">1160 Jackson 5</span>
        </div>
      </div>
    </div>
  );
}
