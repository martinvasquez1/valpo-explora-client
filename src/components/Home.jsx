import { Link } from 'react-router-dom';
import usePlaces from '../hooks/usePlaces.jsx';

import PlaceCard from './PlaceCard.jsx';
import Spinner from './Spinner.jsx';

function HomeCards() {
  const { places, isLoading, isError } = usePlaces();

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div className="pt-4 text-lg">No se pudo obtener destinos populares.</div>
    );

  const topThree = places.data.places.slice(0, 3);

  return (
    <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
      {topThree.map((place) => {
        return <PlaceCard key={place._id} data={place} />;
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="bg-blue-100">
        <div className="mx-auto flex max-w-5xl flex-col justify-center gap-12 px-8 py-10 sm:flex-row sm:py-14 lg:py-14">
          <div className="pt-0 sm:pt-8">
            <h1 className="text-center font-playfair text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl lg:text-7xl">
              Explora <br />
              Valparaiso
            </h1>
            <p className="mt-6 px-10 text-center text-slate-700 sm:px-0 sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate ratione doloremque.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link
                to="/"
                className="mt-6 rounded-xl bg-blue-900 px-8 py-2 font-medium text-white hover:bg-sky-600 sm:mt-4"
              >
                Empieza tu aventura
              </Link>
            </div>
          </div>
          <div className="width-full flex gap-4">
            <div className="flex flex-col gap-4">
              <img
                className="h-60 rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1629537745251-57c3bc5b8670?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="#"
              />
              <img
                className="h-48 rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1566275163755-bbb09bbc5a13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="#"
              />
            </div>
            <div className="flex items-center">
              <img
                className="h-80 rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1490782300182-697b80ad4293?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-8 py-10">
        <h2 className="font-playfair text-3xl font-semibold text-slate-900">
          Destinos populares
        </h2>
        <HomeCards />
      </div>
      <div className="bg-stone-100">
        <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-4 px-8 py-10 sm:flex-row sm:gap-10">
          <div className="flex-1">
            <h2 className="font-playfair text-3xl font-semibold text-slate-900">
              Una experiencia diseñada para ti
            </h2>
            <p className="py-4 text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              commodi tenetur ducimus dolorum, aspernatur aliquid veniam facilis
              quae libero ex quod quibusdam aliquam delectus atque facere quidem
              praesentium a odit!
            </p>
          </div>
          <div className="flex-1">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1629537747452-53f71026e750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
