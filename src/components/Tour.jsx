import Map from './Map.jsx';

export default function Tour() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-8 py-8 sm:flex-row">
        <div className="flex-1">
          <h1>Tour</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            cum!
          </p>
        </div>
        <div className="flex-1 rounded-xl">
          <Map />
        </div>
      </div>
    </div>
  );
}
