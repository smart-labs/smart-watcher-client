import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Page({ history }) {
  const handleLogin = event => {
    event.preventDefault();

    history.push("/");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm={12} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 4 }}>
            <Card>
              <Card.Body>
                <Card.Title>SmartWatcher</Card.Title>

                <Form onSubmit={handleLogin}>
                  <Form.Group>
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="text" required></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" required></Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Entrar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background: #eee;
  display: flex;
  align-items: center;
`;

export default Page;
