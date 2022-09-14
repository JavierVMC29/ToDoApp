import React from 'react';
import styled from 'styled-components';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

// Styled components
const ToogleButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
`;

const ToggleOn = styled(BsToggleOn)`
  font-size: 2rem;
`;

const ToggleOff = styled(BsToggleOff)`
  font-size: 2rem;
`;


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    const { initialState } = props;
    this.state = {
      turnOn: initialState
    };
  }

  changeState = () => {
    const { action } = this.props;
    const { turnOn } = this.state;
    action();
    if (turnOn) {
      this.setState({ turnOn: false });
    } else {
      this.setState({ turnOn: true });
    }
  };

  render() {
    const { turnOn } = this.state;

    return (
      <ToogleButton onClick={this.changeState}>
        {turnOn ? <ToggleOn /> : <ToggleOff />}
      </ToogleButton>
    );
  }
}

export default Toggle;