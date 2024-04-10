import { IconContext } from 'react-icons';

import RouteDestiny from './RouteDestiny.jsx';
import Button from './Button.jsx';

export default function Route({
  setShowForm,
  route,
  setRoute,
  start,
  setStart,
}) {
  return (
    <div>
      <div className="flex flex-col pt-4">
        {route.map((destiny, i) => {
          if (i === 0) {
            return;
          }

          if (i === start) {
            return (
              <RouteDestiny
                key={destiny._id}
                data={destiny}
                handleClick={() => setStart((prev) => prev - 1)}
              />
            );
          }

          if (i === start + 1) {
            return (
              <RouteDestiny
                key={destiny._id}
                data={destiny}
                handleClick={() => setStart((prev) => prev + 1)}
              />
            );
          }

          return (
            <RouteDestiny key={destiny._id} data={destiny} disabled={true} />
          );
        })}
      </div>
      <div className="mt-4">
        <Button
          variant="destructive"
          type="button"
          onClick={() => {
            setShowForm(true);
            setRoute([]);
          }}
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            Borrar ruta
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
}
