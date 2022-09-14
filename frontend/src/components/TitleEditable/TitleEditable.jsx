import React, { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// API
import API from '../../enviroment';

const Container = styled.input`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamily};

  :active,
  :focus {
    outline: none;
    border: none;
  }
`;

function TitleEditable({ taskId, defaultTitle }) {
  const inputRef = useRef();

  const updateTitle = async () => {
    await axios.patch(`${API.url}/tasks/${taskId}/title`, {
      title: inputRef.current.value
    });
  };

  return (
    <Container
      defaultValue={defaultTitle}
      ref={inputRef}
      onChange={updateTitle}
    />
  );
}

export default TitleEditable;
