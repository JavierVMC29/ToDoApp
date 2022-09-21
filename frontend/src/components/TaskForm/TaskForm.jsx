import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

// Hooks
import useLabels from '../../hooks/useLabels';
import { useForm } from 'react-hook-form';

// Functions
import { addTask } from '../../utils/functions';

// Components
import Button from '../Button/Button';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000090;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fontFamily};
  max-width: 800px;
  min-width: 800px;
  padding: 50px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 50px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 15px 50px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
`;
const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
  min-height: 200px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
`;

const PlusIcon = styled(FiPlus)`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 5px;
`;

const Error = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 0;
`;

function TaskForm({ setShowForm }) {
  const labels = useLabels();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => addTask(data);

  const closeForm = () => setShowForm(false);

  return (
    <Background>
      <Container>
        <Title>New Task</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Task title</Label>
          <Error>{errors.title?.message}</Error>
          <Input
            type="text"
            {...register('title', { required: 'Title is required' })}
          />
          <Row>
            <div>
              <Label>Priority</Label>
              <Error>{errors.priority?.message}</Error>
              <Select
                defaultValue="high"
                {...register('priority', { required: 'Priority is required' })}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </div>
            <div>
              <Label>Date</Label>
              <Error>{errors.date?.message}</Error>
              <Input
                type="date"
                {...register('date', { required: 'Date is required' })}
              />
            </div>
            <div>
              <Label>Label</Label>
              <Error>{errors.label?.message}</Error>
              <Select {...register('label', { required: 'Label is required' })}>
                {labels
                  ? labels.map((label) => (
                      <option value={label._id} key={label._id}>
                        {label.name}
                      </option>
                    ))
                  : ''}
              </Select>
            </div>
          </Row>
          <Label>Details</Label>
          <Error>{errors.details?.message}</Error>
          <TextArea
            {...register('details', { required: 'Details are required' })}
          />
          <Options>
            <Button transparent boldHover onClick={closeForm}>
              Cancel
            </Button>
            <Button fontWhite bold>
              <PlusIcon /> Add task
            </Button>
          </Options>
        </Form>
      </Container>
    </Background>
  );
}

export default TaskForm;
