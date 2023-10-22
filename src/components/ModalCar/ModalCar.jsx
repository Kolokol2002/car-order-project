import {
  CardTitle,
  Item,
  ItemText,
  List,
  Make,
  Model,
  Year,
} from 'components/Card/Card.styled';
import Modal from 'components/Modal/Modal';
import React from 'react';
import {
  AccentConditional,
  Description,
  ImageMain,
  ItemConditional,
  ListConditional,
  TextConditional,
  Title,
} from './ModalCar.styled';
import plug_auto from '../../assets/images/plug_auto.png';

const ModalCar = ({ data, isOpen, setIsOpenModal, formatAddress }) => {
  const onClose = () => {
    setIsOpenModal(false);
  };
  const formatConditions = conditions => {
    return conditions.split('\n').map(item => item.split(':'));
  };

  const formatMileage = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ImageMain src={data?.img ?? plug_auto} alt={data.make} />
      <CardTitle>
        <Make>{data?.make}</Make>
        <Model>{data?.model}</Model>
        <Year>{data?.year}</Year>
      </CardTitle>
      <List>
        <Item>
          <ItemText>{formatAddress(data?.address)}</ItemText>
        </Item>
        <Item>
          <ItemText>Id: {data.id}</ItemText>
        </Item>
        <Item>
          <ItemText>Year: {data.year}</ItemText>
        </Item>
        <Item>
          <ItemText>Type: {data.type}</ItemText>
        </Item>
        <Item>
          <ItemText>Fuel Consumption: {data.fuelConsumption}</ItemText>
        </Item>
        <Item>
          <ItemText> Engine Size: {data.engineSize}</ItemText>
        </Item>
      </List>
      <Description>{data.description}</Description>
      <Title>Accessories and functionalities:</Title>
      <List>
        {data.accessories.map((item, idx) => (
          <Item key={idx}>
            <ItemText>{item}</ItemText>
          </Item>
        ))}
        {data.functionalities.map((item, idx) => (
          <Item key={idx}>
            <ItemText>{item}</ItemText>
          </Item>
        ))}
      </List>
      <Title>Rental Conditions: </Title>
      <ListConditional>
        {formatConditions(data.rentalConditions).map((item, idx) =>
          item.length === 1 ? (
            <ItemConditional key={idx}>
              <TextConditional>{item[0]}</TextConditional>
            </ItemConditional>
          ) : (
            <ItemConditional key={idx}>
              <TextConditional>{item[0]}:</TextConditional>
              <AccentConditional>{item[1]}</AccentConditional>
            </ItemConditional>
          )
        )}
        <ItemConditional>
          <TextConditional>Mileage: </TextConditional>
          <AccentConditional>{formatMileage(data.mileage)}</AccentConditional>
        </ItemConditional>
        <ItemConditional>
          <TextConditional>Price: </TextConditional>
          <AccentConditional>{data.rentalPrice}</AccentConditional>
        </ItemConditional>
      </ListConditional>
    </Modal>
  );
};

export default ModalCar;
