import { Outlet } from 'react-router-dom';
import Navbar from '../pages/global/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
