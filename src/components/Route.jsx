import { IconContext } from 'react-icons';

import RouteDestiny from './RouteDestiny.jsx';
import Button from './Button.jsx';

export default function Route({ setShowForm, route, setRoute }) {
  return (
    <div>
      <div className="flex flex-col pt-4">
        {route.map((destiny) => {
          const isInitialPosition = destiny._id === 0;
          if (isInitialPosition) {
            return;
          }
          return <RouteDestiny key={destiny._id} data={destiny} />;
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
