import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #000;
  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  left: 3px;
  top: 3px;
  width: 18px;
  height: 18px;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
`;

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  check = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const { show } = this.props;
    const { checked } = this.state;
    return (
      <Container
        onClick={this.check}
        style={{ display: show ? 'block' : 'none' }}
      >
        <Input type="checkbox" defaultChecked={checked} />
        {checked ? <Checkmark /> : ''}
      </Container>
    );
  }
}

export default Checkbox;