import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

import { FiPlus } from 'react-icons/fi';

// API
import API from '../../enviroment';

// Components
import Task from '../../components/Task/Task';
import Button from '../../components/Button/Button';
import TaskManager from '../../components/TaskManager/TaskManager';

// Styles

const PlusIcon = styled(FiPlus)`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 5px;
`;

const Container = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  min-width: 1044px;
  max-width: 1044px;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.FontFamily};
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
`;

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  div:first-of-type button {
    color: #fff;
    width: 205px;
    height: 50px;
  }

  div:last-of-type {
    display: flex;
    align-items: flex-end;
  }

  div:last-of-type button {
    width: 150px;
    height: 36.59px;
  }

`;

const TasksContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

/**
 * Component to be displayed in the main page
 * @returns JSX.Element
 */
function Home() {
  const [tasks, setTasks] = useState()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API.url}/tasks`);
      setTasks(response.data)
    }
    fetchData()
  },[])

  const addTask = () => {
    setShowForm(true)
  }

  return (
    <Container>
      <ContentContainer>
        <Title>Your tasks</Title>
        <OptionsContainer>
          <div>
            <Button onClick={addTask} bold>
              <PlusIcon />
              Add task
            </Button>
          </div>
          <div>
            <TaskManager />
          </div>
        </OptionsContainer>
        <TasksContainer>
          {tasks
            ? tasks.map((task) => {
              return <Task key={task._id} task={task} showCheckbox={false} />;
            })
            : <p>Loading...</p>}
        </TasksContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;