import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" bg-blue-950 py-10 text-white">
      <div className="mx-auto flex flex-col justify-between gap-4 px-8 sm:flex-row">
        <div className="flex-1 text-left">
          <Logo className="mb-4 text-white" />
          <hr className="my-4" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            molestias harum veniam ipsam corrupti!
          </p>
        </div>
        <div className="flex flex-1 justify-center sm:items-center sm:pl-6">
          <div className="flex flex-1 flex-col gap-6 sm:gap-4">
            <div className="flex">
              <p className="font-playfair text-lg font-bold">Servicios</p>
            </div>
            <div>
              <ul className="">
                <li>
                  <Link to="/lugares" className="mb-1">
                    Lugares
                  </Link>
                </li>
                <li>
                  <Link to="/tour" className="mb-1">
                    Tour
                  </Link>
                </li>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
