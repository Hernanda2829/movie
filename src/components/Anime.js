import { Card, Col, Row, Container, Image } from 'react-bootstrap';
import SAO from '../assets/images/Anime/SAO.jpg';
import KIMI from '../assets/images/Anime/kimi.png';
import PIECE from '../assets/images/Anime/piece.jpg';
import SUZUME from '../assets/images/Anime/Suzume.jpg';
import BORUTO from '../assets/images/Anime/boruto.png';
import HAIKYUU from '../assets/images/Anime/haikyuu.jpg';

const Anime = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark">Anime List</h1>
        <br />
        <Row>
          <Col md={4} className="MovieWrapper" id="anime">
            <Card className="text-dark bg-Light MovieImg">
              <Image src={SAO} alt="SAO Movies" className="images" />
              <Card.Title className="text-center mt-2">SAO</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="text-dark bg-Light MovieImg">
              <Image src={KIMI} alt="Kimi no Nawa Movies" className="images" />
              <Card.Title className="text-center mt-2">Kimi no Nawa</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="text-dark bg-Light MovieImg">
              <Image src={SUZUME} alt="Suzume Movies" className="images" />
              <Card.Title className="text-center mt-2">Suzume no Tojimari</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="text-dark bg-Light MovieImg">
              <Image src={PIECE} alt="One Piece Movies" className="images" />
              <Card.Title className="text-center mt-2">One Piece</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="text-dark bg-Light MovieImg">
              <Image src={BORUTO} alt="Boruto Movies" className="images" />
              <Card.Title className="text-center mt-2">Boruto</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="text-dark bg-Light MovieImg">
              <Image src={HAIKYUU} alt="Haikyuu Movies" className="images" />
              <Card.Title className="text-center mt-2">Haikyuu</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Anime;
