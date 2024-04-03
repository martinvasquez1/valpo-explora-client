import { IconContext } from 'react-icons';

import RouteDestiny from './RouteDestiny.jsx';
import Button from './Button.jsx';

export default function Route({ setShowForm }) {
  return (
    <div>
      <div className="flex flex-col pt-4">
        <RouteDestiny />
        <RouteDestiny />
        <RouteDestiny />
      </div>
      <div className="mt-4">
        <Button
          variant="destructive"
          type="button"
          onClick={() => setShowForm(true)}
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            Borrar ruta
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
}
