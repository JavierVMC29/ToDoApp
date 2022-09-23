import React, { useState } from 'react';
import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

// Hooks
import useTasks from '../../hooks/useTasks';

// Components
import Task from '../../components/Task/Task';
import Button from '../../components/Button/Button';
import TaskManager from '../../components/TaskManager/TaskManager';
import TaskForm from '../../components/TaskForm/TaskForm';

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
  const [showForm, setShowForm] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);

  const tasks = useTasks(showForm);

  const addTask = () => {
    setShowForm(true);
  };

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
            <TaskManager showCheckbox={setShowCheckbox} />
          </div>
        </OptionsContainer>
        {showForm ? <TaskForm setShowForm={setShowForm} /> : ''}
        <TasksContainer>
          {tasks ? (
            tasks.map((task) => {
              return (
                <Task key={task._id} task={task} showCheckbox={showCheckbox} />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </TasksContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;
