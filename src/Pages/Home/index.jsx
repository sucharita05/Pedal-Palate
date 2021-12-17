import React, { useRef } from 'react';
import ButtonCartCount from '../../Components/Common/ButtonCartCount';
import Footer from '../../Components/Common/Footer';
import Banner from '../../Components/Header';
import Menu from '../../Components/Common/Menu';
import { menuItemsData } from '../../Components/Common/Menu/data';

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;