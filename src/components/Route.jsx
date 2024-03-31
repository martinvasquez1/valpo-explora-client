import { IconContext } from 'react-icons';

import Button from './Button.jsx';

export default function Route({ setShowForm }) {
  return (
    <div>
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
