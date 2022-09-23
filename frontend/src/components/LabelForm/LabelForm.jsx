import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

// Hooks
import { useForm } from 'react-hook-form';

// Functions
import { addLabel } from '../../utils/functions';

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

const InputText = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
  margin-right: 30px;
`;

const InputColor = styled.input`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 30px;
  height: 37px;
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

function LabelForm({ setShowForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    addLabel(data);
    closeForm();
  };

  const closeForm = () => setShowForm(false);

  return (
    <Background>
      <Container>
        <Title>New Label</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <div>
              <Label>Name</Label>
              <Error>{errors.title?.message}</Error>
              <InputText
                type="text"
                {...register('name', { required: 'Name is required' })}
              />
            </div>
            <div>
              <Label>Color</Label>
              <Error>{errors.priority?.message}</Error>
              <InputColor
                type="color"
                {...register('color', { required: 'Color is required' })}
              />
            </div>
          </Row>
          <Options>
            <Button transparent boldHover onClick={closeForm}>
              Cancel
            </Button>
            <Button fontWhite bold>
              <PlusIcon /> Add label
            </Button>
          </Options>
        </Form>
      </Container>
    </Background>
  );
}

export default LabelForm;
