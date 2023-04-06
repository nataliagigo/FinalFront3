import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import { Paths } from './Components/utils/Paths';
import NotFound from './Routes/NotFound';

function MainLayout() {
  const { home, contact, favs, dentist } = Paths;

  return (
    <div className='MainLayout'>
      <Navbar />
      <Routes>
        <Route path={home.path} element={<Home />} />
        <Route path={`${dentist.path}/:id`} element={<Detail />} />
        <Route path={favs.path} element={<Favs />} />
        <Route path={contact.path} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainLayout;
