import React from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp, FiCalendar } from 'react-icons/fi';
import Label from '../Label/Label';
import TitleEditable from '../TitleEditable/TitleEditable';
import Checkbox from '../Checkbox/Checkbox';

const Container = styled.div`
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.backgroundSecundary};
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 0;
`;

const ExpandIcon = styled(FiChevronDown)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`;

const CompactIcon = styled(FiChevronUp)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`;

const CalendarIcon = styled(FiCalendar)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecundary};
  margin-right: 5px;
`;

const InfoContainer = styled.p`
  color: ${(props) => props.theme.colors.textSecundary};
  font-size: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 0;
  span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const DetailsWrapper = styled.div`
  width: 100%;
  p {
    line-height: 1.5;
  }
`;

const CheckInput = styled.div`
  position: absolute;
  left: -40px;
  top: 88px;
`;

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }

  expandTask = () => {
    this.setState((state) => ({
      ...state,
      expand: !state.expand
    }));
  };

  render() {
    const { task, showCheckbox } = this.props;
    const { expand } = this.state;
    const date = new Date(task.date);
    return (
      <Container id={task.id}>
        <CheckInput>
          <Checkbox show={showCheckbox} />
        </CheckInput>
        <Wrapper>
          <TitleEditable defaultTitle={task.title} taskId={task._id} />
          <InfoContainer>
            <CalendarIcon />
            {date.toLocaleDateString()}
          </InfoContainer>
          <InfoContainer>
            <span>Priority:</span>
            {task.priority}
          </InfoContainer>
          <LabelContainer>
            <Label name={task.label.name} color={task.label.color} />
          </LabelContainer>
        </Wrapper>
        {expand ? (
          <>
            <div>
              <CompactIcon onClick={this.expandTask} />
            </div>
            <DetailsWrapper>
              <h3>Details:</h3>
              <p>{task.details}</p>
            </DetailsWrapper>
          </>
        ) : (
          <div>
            <ExpandIcon onClick={this.expandTask} />
          </div>
        )}
      </Container>
    );
  }
}

export default Task;
