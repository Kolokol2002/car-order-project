import React from 'react';
import bgImage from '../../assets/images/bg-home-page.png';
import carBg from '../../assets/images/car-on-bg.png';
import {
  BackgroundCar,
  BackgroundImage,
  BackgroundImages,
  ContentContainer,
  HomeContainer,
  MainContainer,
  MainSubTitle,
  MainTitle,
  MainTitleAccent,
} from './HomePage.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';

const HomeLayout = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <MainContainer>
        <ContentContainer>
          <MainTitle>
            Looking for Modern Cars to Rent here in
            <MainTitleAccent> Company</MainTitleAccent>?
          </MainTitle>
          <MainSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MainSubTitle>
          <MainButton onClick={() => navigate('/catalog')} width={'200px'}>
            Rental Now
          </MainButton>
        </ContentContainer>
        <BackgroundImages>
          <BackgroundImage src={bgImage} alt="" />
          <BackgroundCar src={carBg} alt="" />
        </BackgroundImages>
      </MainContainer>
    </HomeContainer>
  );
};

export default HomeLayout;
