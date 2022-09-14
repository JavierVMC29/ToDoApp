import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Calendar() {
  return <Container />;
}

export default Calendar;