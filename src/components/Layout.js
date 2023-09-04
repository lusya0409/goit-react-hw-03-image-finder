import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spasing(4)};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spasing(10)};
`;
