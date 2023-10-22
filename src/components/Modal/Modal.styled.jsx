import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-color-bg);
  border: 1px solid #dce3e5cc;
  border-radius: 12px;
  padding: 40px;
  z-index: 1000;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #12141780;
  z-index: 999;
`;

export const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  padding: 0;
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--close-color);
  transition: color 0.3s ease-in-out;
  &:hover {
    stroke: #84828a;
  }
`;
