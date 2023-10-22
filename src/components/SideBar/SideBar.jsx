import React from 'react';
import {
  ButtonClose,
  ButtonIcon,
  LinkContainer,
  LinkStyled,
  Links,
  SidebarStyled,
} from './SideBar.styled';
import sprite from '../../assets/images/icons/icons.svg';

const SideBar = ({ onToggleSidbar }) => {
  return (
    <SidebarStyled>
      <ButtonClose onClick={onToggleSidbar}>
        <ButtonIcon>
          <use xlinkHref={`${sprite}#icon-close`} />
        </ButtonIcon>
      </ButtonClose>
      <Links onClick={onToggleSidbar}>
        <LinkContainer>
          <LinkStyled to={'/'}>Home</LinkStyled>
        </LinkContainer>
        <LinkContainer>
          <LinkStyled to={'/catalog'}>Catalog</LinkStyled>
        </LinkContainer>
        <LinkContainer>
          <LinkStyled to={'/favorites'}>Favorites</LinkStyled>
        </LinkContainer>
      </Links>
    </SidebarStyled>
  );
};

export default SideBar;
