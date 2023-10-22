import React from 'react';

import makesData from '../../data/makes.json';
import {
  FiltersStyled,
  InputContainer,
  InputStyled,
  OptionStyled,
  SelectContainer,
  SelectStyled,
} from './Filters.styled';
import MainButton from 'components/Buttons/MainButton/MainButton';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { filterGetCarsOperation } from 'redux/cars/operations';

const initialValues = {
  make: '',
  rentalCost: 0,
  from: 0,
  to: 0,
};

const Filters = () => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    dirty,
    isSubmitting,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: onSearch,
  });

  function onSearch({ make, rentalCost, from, to }) {
    const formatData = {
      make,
      rentalCost: Number(rentalCost),
      from: Number(from),
      to: Number(to),
      page: 1,
    };
    dispatch(filterGetCarsOperation(formatData));
    // console.log(formatData);
  }
  return (
    <FiltersStyled onSubmit={handleSubmit}>
      <SelectContainer>
        <SelectStyled
          name="make"
          value={values.make}
          onChange={handleChange('make')}
          onBlur={handleBlur('make')}
          errors={errors.make}
        >
          <OptionStyled value="">Enter the text</OptionStyled>
          {makesData.map((item, idx) => (
            <OptionStyled key={idx} value={item}>
              {item}
            </OptionStyled>
          ))}
        </SelectStyled>
      </SelectContainer>
      <SelectContainer>
        <SelectStyled
          name="rentalCost"
          value={values.rentalCost}
          onChange={handleChange('rentalCost')}
          onBlur={handleBlur('rentalCost')}
          errors={errors.rentalCost}
        >
          <OptionStyled value="">To $</OptionStyled>
          {[...Array(100)].map((_, idx) => (
            <OptionStyled key={idx} value={(idx + 1) * 10}>
              {(idx + 1) * 10}
            </OptionStyled>
          ))}
        </SelectStyled>
      </SelectContainer>
      <InputContainer>
        <InputStyled
          type="text"
          placeholder="From"
          name="makes"
          value={values.from}
          onChange={handleChange('from')}
          onBlur={handleBlur('from')}
          errors={errors.from}
        />
        <InputStyled
          type="text"
          placeholder="To"
          name="makes"
          value={values.to}
          onChange={handleChange('to')}
          onBlur={handleBlur('to')}
          errors={errors.to}
        />
      </InputContainer>
      <MainButton width={'136px'}>Search</MainButton>
    </FiltersStyled>
  );
};

export default Filters;
