import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 500;
  color: #fff;
  background: ${(props) => props.color};
  padding: 10px;
  border-radius: 4px;
`;

function Label({ name, color }) {
  return <Container color={color}>{name}</Container>;
}

export default Label;