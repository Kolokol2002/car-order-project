import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  padding-left: 50px;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MainTitle = styled.h1`
  font-size: 47px;
  margin-bottom: 30px;
  color: var(--main-color-text);
`;
export const MainTitleAccent = styled.span`
  color: var(--brand-color);
`;
export const MainSubTitle = styled.p`
  max-width: 465px;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 30px;
  color: var(--main-color-text);
`;

export const BackgroundImages = styled.div`
  width: 720px;
`;
export const BackgroundImage = styled.img`
  display: block;
  margin-left: auto;
  height: 100vh;
`;
export const BackgroundCar = styled.img`
  position: absolute;
  width: 560px;
  top: 335px;
  right: 20px;
`;
