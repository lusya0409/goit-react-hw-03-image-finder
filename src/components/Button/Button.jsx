import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onHandleLoadMore }) => {
  return <ButtonLoadMore onClick={onHandleLoadMore}>Load more</ButtonLoadMore>;
};
