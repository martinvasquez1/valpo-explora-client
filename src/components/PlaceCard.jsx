import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function PlaceCard({ data }) {
  return (
    <Link
      to={`/lugares/${data._id}`}
      className="rounded-xl bg-white shadow-md hover:bg-sky-100"
    >
      <div>
        <img
          className="h-52 w-full rounded-t-lg object-cover"
          src={data.imageUrl}
        />
      </div>
      <div className="rounded-b-lg px-4 py-6 ">
        <h3 className="font-playfair text-xl font-semibold text-slate-800">
          {data.name}
        </h3>
        <span className="flex items-center gap-2 align-bottom text-sm">
          Learn more
          <IconContext.Provider value={{ size: '0.8em', color: '#232' }}>
            <FaArrowRight />
          </IconContext.Provider>
        </span>
      </div>
    </Link>
  );
}
