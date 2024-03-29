import Select from 'react-select';
import { IconContext } from 'react-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Button from './Button.jsx';
import Map from './Map.jsx';
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

export default function Tour() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-8 py-8 sm:flex-row">
        <div className="flex-1">
          <h1 className="font-playfair text-4xl font-semibold text-slate-900">
            Tour
          </h1>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum
            dicta ratione laboriosam culpa explicabo in quibusdam amet!
          </p>
          <form onSubmit={() => console.log('Submit')}>
            <Select
              className="py-4"
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isSearchable={true}
              name="lugar"
              placeholder="Localización..."
              options={placeOptions}
              required={true}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="time">Duración</label>
              <Select
                className="py-2"
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                name="time"
                id="time"
                placeholder="Tiempo..."
                options={timeOptions}
                required={true}
              />
            </div>
            <div>
              <p className="my-4">Intereses</p>
              <div className="flex flex-wrap gap-4">
                <Checkbox name="arte" text="Arte" />
                <Checkbox name="miradores" text="Miradores" />
                <Checkbox name="museos" text="Museos" />
              </div>
            </div>

            <Button type="submit" className="mt-4 flex items-center gap-2">
              <IconContext.Provider value={{ size: '1.0em' }}>
                <FaMapMarkerAlt />
              </IconContext.Provider>
              <span>Generar ruta</span>
            </Button>
          </form>
        </div>
        <div className="flex-1 rounded-xl">
          <Map />
        </div>
      </div>
    </div>
  );
}
