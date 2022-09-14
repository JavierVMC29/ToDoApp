import React from 'react';
import styled from 'styled-components';
import { CurrentThemeContext, SetThemeContext } from '../../App';
import Toggle from '../../components/Toggle/Toggle';

const Container = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

function Settings() {
  const currentTheme = React.useContext(CurrentThemeContext);

  const setTheme = React.useContext(SetThemeContext);

  const changeTheme = () => {
    if (currentTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Container>
      <Title>Settings</Title>
      <Toggle action={changeTheme} initialState={currentTheme !== 'light'} />
    </Container>
  );
}

export default Settings;