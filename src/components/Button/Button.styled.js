import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  padding-right: ${({ theme }) => theme.spasing(4)};
  padding-left: ${({ theme }) => theme.spasing(4)};
  padding-top: ${({ theme }) => theme.spasing(2)};
  padding-bottom: ${({ theme }) => theme.spasing(2)};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.shadow};

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
