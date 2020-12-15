import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  top: 0; left: 0;
  bottom: 0; right: 0;

  display: grid;
  grid-template-rows: 80px 40px 1fr 40px;
  grid-template-columns: 3fr 1fr;

  grid-template-areas:
    'header header'
    'menu menu'
    'content sidebar'
    'footer footer';

  font-family: Arial, Helvetica, sans-serif;
`;