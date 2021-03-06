import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Button danger>Hello</Button>
          <Button>Hello</Button>
          <Anchor as="a" href="https://google.com">
            Go to google
          </Anchor>
        </Container>
      </Fragment>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: black;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;
const Anchor = styled(Button)`
  text-decoration: none;
`;

export default App;
