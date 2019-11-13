import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  NavDropdown,Alert
} from "react-bootstrap";

function Page() {
  const [responseTime, setResponseTime] = React.useState({
    s1: 218,
    s2: 176,
    s3: 235,
    s4: 212
  });

  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">SmartWatcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Opções" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Sobre o sistema</NavDropdown.Item>
              <NavDropdown.Item href="#">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="my-4">
        <Row>
          <Col sm={12} lg={6} xl={4}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>IoT Server</Card.Title>
                <Card.Text>status: online</Card.Text>
                <Card.Text>tempo de resposta: {responseTime.s1}ms</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={6} xl={4}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>KNoT Cloud</Card.Title>
                <Card.Text>status: offline</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={6} xl={4}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>Triggers Service</Card.Title>
                <Card.Text>status: online</Card.Text>
                <Card.Text>tempo de resposta: {responseTime.s3}ms</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={6} xl={4}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>SmartHub</Card.Title>
                <Card.Text>status: online</Card.Text>
                <Card.Text>tempo de resposta: {responseTime.s4}ms</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


  <Alert variant="warning" className="position-absolute" style={{right:'30px',bottom:"30px"}}>
    Houve um erro ao se conectar ao servidor
  </Alert>
    </>
  );
}

export default Page;
