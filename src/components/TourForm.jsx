import Select from 'react-select';
import { IconContext } from 'react-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Button from './Button.jsx';
import Checkbox from './Checkbox.jsx';

const placeOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const timeOptions = [
  { value: '30', label: '30 minutos' },
  { value: '60', label: '1 hora' },
  { value: '90', label: '1 hora y 30 minutos' },
];

export default function TourForm({ setShowForm }) {
  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <>
      <p className="pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum
        dicta ratione laboriosam culpa explicabo in quibusdam amet!
      </p>
      <form onSubmit={handleSubmit} className="pt-6">
        <div>
          <label htmlFor="place">Localización</label>
          <Select
            className="pt-2"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="lugar"
            inputId="place"
            placeholder="Lugar..."
            options={placeOptions}
            required={true}
          />
        </div>
        <div className="pt-4">
          <label htmlFor="time">Duración</label>
          <Select
            className="pt-2"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            name="time"
            inputId="time"
            placeholder="Tiempo..."
            options={timeOptions}
            required={true}
          />
        </div>
        <div>
          <p className="mb-2 mt-4">Intereses</p>
          <div className="flex flex-wrap gap-2">
            <Checkbox name="arte" text="Arte" />
            <Checkbox name="miradores" text="Miradores" />
            <Checkbox name="museos" text="Museos" />
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 py-4"
        >
          <IconContext.Provider value={{ size: '1.0em' }}>
            <FaMapMarkerAlt />
          </IconContext.Provider>
          <span>Generar ruta</span>
        </Button>
      </form>
    </>
  );
}