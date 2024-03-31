import { useState } from 'react';

import TourForm from './TourForm.jsx';
import Map from './Map.jsx';
import Route from './Route.jsx';

export default function Tour() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="mx-auto flex flex-col sm:flex-row">
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <h1 className="font-playfair text-4xl font-semibold text-slate-900">
              Tour
            </h1>
          </div>
          {showForm ? (
            <TourForm setShowForm={setShowForm} />
          ) : (
            <Route setShowForm={setShowForm} />
          )}
        </div>
        <div className="flex-[3] rounded-xl">
          <Map />
        </div>
      </div>
    </div>
  );
}
