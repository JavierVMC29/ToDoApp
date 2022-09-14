import React from 'react';
import { FiCheck, FiTrash } from 'react-icons/fi';
import styled from 'styled-components';
import Button from '../Button/Button';

const CheckIcon = styled(FiCheck)`
  color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
  margin-right: 5px;
`;

const TrashIcon = styled(FiTrash)`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
  margin-right: 5px;
  color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.text};
`;

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    };
  }

  changeToDefaultMode = () => {
    this.setState({ mode: 'default' });
  };

  changeToMarkMode = () => {
    this.setState({ mode: 'mark' });
  };

  changeToDeleteMode = () => {
    this.setState({ mode: 'delete' });
  };

  render(){
    const { mode } = this.state;

    if (mode === 'mark') {
      return (
        <>
          <Button green fontWhite>
            <CheckIcon white/>
            Mark tasks
          </Button>
          <Button onClick={this.changeToDefaultMode} transparent>
            Cancel
          </Button>
        </>
      );
    }

    if (mode === 'delete') {
      return (
        <>
          <Button red fontWhite>
            <CheckIcon white/>
            Delete tasks
          </Button>
          <Button onClick={this.changeToDefaultMode} transparent>
            Cancel
          </Button>
        </>
      );
    }

    return (
      <>
        <Button onClick={this.changeToMarkMode} transparent boldHover>
          <CheckIcon />
          Mark tasks
        </Button>
        <Button onClick={this.changeToDeleteMode} transparent boldHover>
          <TrashIcon />
          Delete tasks
        </Button>
      </>
    );
  }
}

export default TaskManager;