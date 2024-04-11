import { useParams } from 'react-router-dom';
import usePlace from '../hooks/usePlace';

import Spinner from './Spinner';
import ErrorResult from './ErrorResult';

export default function Place() {
  const { id } = useParams();
  const { place, isLoading, isError } = usePlace(id);

  if (isLoading)
    return (
      <div className="min-h-screen">
        <Spinner />
      </div>
    );
  if (isError)
    return (
      <div className="mx-auto max-w-5xl p-8">
        <ErrorResult />;
      </div>
    );

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-8">
      <div className="pt-12">
        <img
          src={place.data.place.imageUrl}
          alt="#"
          className="h-96 w-full rounded-lg object-cover"
        />
      </div>
      <div className="py-8">
        <h1 className="font-playfair text-5xl font-semibold text-slate-900">
          {place.data.place.name}
        </h1>
        <p className="pt-6 text-slate-700">{place.data.place.description}</p>
      </div>
    </div>
  );
}
