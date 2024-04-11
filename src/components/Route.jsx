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
                variant="lastVisited"
                isLastDestiny={i === route.length - 1}
              />
            );
          }

          if (i === start + 1) {
            return (
              <RouteDestiny
                key={destiny._id}
                data={destiny}
                handleClick={() => setStart((prev) => prev + 1)}
                variant="destiny"
                isLastDestiny={i === route.length - 1}
              />
            );
          }

          return (
            <RouteDestiny
              key={destiny._id}
              data={destiny}
              disabled={true}
              variant={i > start ? 'notVisited' : 'visited'}
              isLastDestiny={i === route.length - 1}
            />
          );
        })}
      </div>
      <div className="mt-4">
        <Button
          variant="secondary"
          className="font-medium"
          type="button"
          onClick={() => {
            setShowForm(true);
            setRoute([]);
            setStart(0);
          }}
        >
          Terminar recorrido
        </Button>
      </div>
    </div>
  );
}
