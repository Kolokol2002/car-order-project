import React from 'react';
import { MainButtonStyled } from './MainButton.styled';

const MainButton = ({ children, onClick, width }) => {
  return (
    <MainButtonStyled type="submit" onClick={onClick} width={width}>
      {children}
    </MainButtonStyled>
  );
};

export default MainButton;
