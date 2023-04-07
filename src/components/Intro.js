import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex text-center justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">NONTON ANIME LEGAL</div>
            <div className="title">HANYA DI SINI</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href="#anime">
                Lihat List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
