import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  background-color: var(--main-color-bg);
  padding: 100px;
  box-shadow: 10px 0px 41px -5px rgba(0, 0, 0, 0.75);
`;
export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const LinkContainer = styled.li`
  font-size: 20px;
  /* line-height: 24px; */
`;
export const LinkStyled = styled(NavLink)`
  &.active {
    color: var(--brand-color);
  }
  &:hover {
    color: var(--brand-color);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;
export const ButtonIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
