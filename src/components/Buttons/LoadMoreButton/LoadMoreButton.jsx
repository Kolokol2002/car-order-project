import React from 'react';
import { LoadMoreButtonStyled } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <LoadMoreButtonStyled onClick={onLoadMore}>Load more</LoadMoreButtonStyled>
  );
};

export default LoadMoreButton;
