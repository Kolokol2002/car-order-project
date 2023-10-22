import React from 'react';
import { BurgerButtonStyled } from './BurgerButton.styled';

const BurgerButton = ({ onClick }) => {
  return <BurgerButtonStyled onClick={onClick}>☰</BurgerButtonStyled>;
};

export default BurgerButton;
