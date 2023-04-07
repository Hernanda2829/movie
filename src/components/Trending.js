import { useEffect, useState } from 'react';
import { Card, Col, Row, Container, Image } from 'react-bootstrap';
import SAO from '../assets/images/Anime/SAO.jpg';
import KIMI from '../assets/images/Anime/kimi.png';
import PIECE from '../assets/images/Anime/piece.jpg';
import SUZUME from '../assets/images/Anime/Suzume.jpg';
import BORUTO from '../assets/images/Anime/boruto.png';
import HAIKYUU from '../assets/images/Anime/haikyuu.jpg';
import axios from 'axios';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark">Trending Movies</h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="MovieWrapper" id="trending" key={index}>
                <Card className="text-dark bg-Light MovieImg">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="Kimi no Nawa Movies" className="images" />
                  <Card.Title className="text-center mt-2">{result.title}</Card.Title>
                  <Card.Text className="teks">{result.overview}</Card.Text>
                  <Card.Text className="text-left">{result.release_date}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
