import styled from 'styled-components';

const Button = styled.button`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => (props.bold ? 'bold' : '500')};
  color: ${(props) =>
    props.fontWhite ? props.theme.colors.white : props.theme.colors.text};
  padding: 10px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    font-weight: ${(props) => (props.boldHover ? 'bold' : '')};
    background: ${(props) => props.theme.colors.primaryDark};
    background: ${(props) => (props.green ? props.theme.colors.greenDark : '')};
    background: ${(props) => (props.red ? props.theme.colors.redDark : '')};
    background: ${(props) =>
      props.transparent ? props.theme.colors.transparent : ''};
  }
  background: ${(props) => props.theme.colors.primary};
  background: ${(props) => (props.green ? props.theme.colors.green : '')};
  background: ${(props) => (props.red ? props.theme.colors.red : '')};
  background: ${(props) =>
    props.transparent ? props.theme.colors.transparent : ''};
`;

export default Button;
