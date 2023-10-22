import BurgerButton from 'components/Buttons/BurgerButton/BurgerButton';
import SideBar from 'components/SideBar/SideBar';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const onToggleSidbar = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div>
      {pathname !== '/' && (
        <BurgerButton onClick={onToggleSidbar}>☰</BurgerButton>
      )}
      {isOpen && <SideBar onToggleSidbar={onToggleSidbar} />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
