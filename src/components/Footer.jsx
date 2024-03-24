import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-10 bg-blue-950 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 px-8 sm:flex-row">
        <div className="flex-1 text-left">
          <Logo className="mb-4 text-white" />
          <hr className="my-4" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            molestias harum veniam ipsam corrupti!
          </p>
        </div>
        <div className="flex flex-1 justify-center sm:items-center sm:pl-14">
          <div className="flex flex-1 flex-col gap-6 sm:gap-4">
            <div className="flex">
              <p className="font-playfair text-lg font-bold">Home</p>
            </div>
            <div>
              <ul className="">
                <li className="mb-1">Inicio</li>
                <li className="mb-1">Lugares</li>
                <li>Tour</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 sm:gap-4">
            <div className="flex">
              <p className="font-playfair text-lg font-bold">Lorem</p>
            </div>
            <div>
              <ul className="">
                <li className="mb-1">Ipsum</li>
                <li className="mb-1">Dolor</li>
                <li>Sit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
