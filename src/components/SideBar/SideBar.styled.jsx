import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100vh;
  background-color: var(--main-color-bg);
  padding: 30px;
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
