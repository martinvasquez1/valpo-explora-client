import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="font-roboto bg-[#f5fdff]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
