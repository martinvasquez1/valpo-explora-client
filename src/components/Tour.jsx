import { useState } from 'react';

import TourForm from './TourForm.jsx';
import Map from './Map.jsx';
import Route from './Route.jsx';

const coordsInitial = { lat: -33.0318082, lng: -71.6472691 };

export default function Tour() {
  const [showForm, setShowForm] = useState(true);
  const [initialPosition, setInitialPosition] = useState(coordsInitial);
  const [route, setRoute] = useState([]);
  const [start, setStart] = useState(0);

  console.log(start);

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex flex-col sm:flex-row">
        <div className="h-screen min-w-0 flex-1 overflow-y-scroll p-8">
          <div className="flex items-center justify-between">
            <h1 className="font-playfair text-4xl font-semibold text-slate-900">
              Tour
            </h1>
          </div>
          {showForm ? (
            <TourForm
              setShowForm={setShowForm}
              initialPosition={initialPosition}
              setRoute={setRoute}
            />
          ) : (
            <Route
              setShowForm={setShowForm}
              route={route}
              setRoute={setRoute}
              start={start}
              setStart={setStart}
            />
          )}
        </div>
        <div className="flex-[3] rounded-xl">
          <Map
            initialPosition={initialPosition}
            setInitialPosition={setInitialPosition}
            showForm={showForm}
            route={route}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}
