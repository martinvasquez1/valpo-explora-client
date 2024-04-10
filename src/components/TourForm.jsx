import Select from 'react-select';
import { IconContext } from 'react-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import useSendRouteForm from '../hooks/useSendRouteForm.jsx';
import { useState } from 'react';

import Button from './Button.jsx';
import Checkbox from './Checkbox.jsx';

const comunaOptions = [
  { value: 'valparaiso', label: 'Valparaíso' },
  { value: 'vina_del_mar', label: 'Viña del Mar' },
];

const timeOptions = [
  { value: '30', label: '30 minutos' },
  { value: '60', label: '1 hora' },
  { value: '90', label: '1 hora y 30 minutos' },
];

export default function TourForm({ setShowForm, initialPosition }) {
  const { trigger, isMutating } = useSendRouteForm();

  const [comuna, setComuna] = useState('');
  const [time, setTime] = useState(0);
  const [types, setTypes] = useState({
    art: false,
    museum: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const typesArr = [];
    for (const property in types) {
      if (types[property] === true) {
        typesArr.push(property);
      }
    }

    try {
      const data = {
        comuna,
        time,
        types: typesArr,
        initialLat: initialPosition.lat,
        initialLng: initialPosition.lng,
      };
      const result = await trigger(data);
      console.log('result', result);
      // setShowForm(false);
    } catch (e) {
      // error handling
    }
  }

  return (
    <>
      <p className="pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum
        dicta ratione laboriosam culpa explicabo in quibusdam amet!
      </p>
      <form onSubmit={handleSubmit} className="pt-6">
        <div>
          <label htmlFor="comuna">Comuna</label>
          <Select
            className="pt-2"
            onChange={(e) => {
              if (e === null) return;
              setComuna(e.value);
            }}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="comuna"
            inputId="comuna"
            placeholder="Comuna..."
            options={comunaOptions}
            required={true}
          />
        </div>
        <div className="pt-4">
          <label htmlFor="time">Duración</label>
          <Select
            className="pt-2"
            onChange={(e) => {
              if (e === null) return;
              setTime(e.value);
            }}
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
            <Checkbox
              handleClick={() =>
                setTypes((prev) => ({ ...prev, art: !prev.art }))
              }
              name="arte"
              text="Arte"
            />
            <Checkbox
              handleClick={() =>
                setTypes((prev) => ({ ...prev, museum: !prev.museum }))
              }
              name="museos"
              text="Museos"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 py-4"
          disabled={isMutating}
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
