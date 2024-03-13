import {Container, Row, Col} from "react-bootstrap";
import GoldenImage from "../assets/img/LOGO GOLDEN.png"

import {JurusanTerbaru} from "../data/index.js";
import {useNavigate} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6" className="pt-lg-0 pt-5" data-aos="flip-right" data-aos-duration="3000"> 
          <img src={GoldenImage} alt="error" />
          </Col>
          <Col lg="6">
          <h1 className="mb-4" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200"><span>SMK GOLDEN</span></h1>
          </Col>
        </Row>
      </Container>
      </header>
      <div className="berita w-100 min-vh-100">
        <Container>
        <Row>
            <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up" data-aos-duration="3000">Berita Terbaru</h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <CardGroup>
              <Card data-aos="fade-right" data-aos-duration="3000">
                <Card.Img variant="top" src="https://cdn-cas.orami.co.id/parenting/images/kucing_gemas-1.width-800.jpg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">
                <Card.Img variant="top" src="https://cdn-cas.orami.co.id/parenting/images/kucing_gemas-1.width-800.jpg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card data-aos="fade-left" data-aos-duration="3000" data-aos-delay="800">
                <Card.Img variant="top" src="https://i2.wp.com/kucing.co.id/wp-content/uploads/2019/01/kucing-lucu.jpg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted" >Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" data-aos="fade-up" data-aos-duration="3000">
              <a href="#">Berita Lainya <i className="fa-solid fa-chevron-right ms-1"></i></a>
            </Col>
          </Row>
          
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Row data-aos="fade-down" data-aos-duration="3000">
              <Col>
              <h1 className="text-center fw-bold">Jurusan</h1>
              <p className="text-center">SMK GOLDEN mempunyai 4 jurusan.</p>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="jurusan">
        <Container>
          <Row>
            <Col>
              <div className="column 1">
                <p>jurusan 1</p>
                <p>jurusan 2</p>
              </div>
              <div className="column 2">
                <p>jurusan 3</p>
                <p>jurusan 4</p>
              </div>
            </Col>
          </Row>


          {/* <Row data-aos="fade-down" data-aos-duration="3000">
            <Col>
            <h1 className="text-center fw-bold">Jurusan</h1>
            <p className="text-center">SMK GOLDEN mempunyai 4 jurusan.</p>
            </Col>
          </Row> */}

          {/* jurusan */}
            {/* <Row>
              <Col>
                <div className="card-jurusan">
                  <div>
                    <img className="foto1" src="" alt="" />
                    <img className="foto2" src="" alt="" />
                  </div>
                  <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  </div>
                </div>
              </Col>
            </Row> */}
          {/* end */}

          {/* <Row data-aos="fade-up" data-aos-duration="3000">
            {JurusanTerbaru.map((Jurusan) => {
              return (
                <Col key={Jurusan.id} data-aos="fade-up" data-aos-duration="3000">
                  <img src={Jurusan.image} alt="error" className="mb-5 rounded-top"/>
                  <div className="star mb-2 px-3">
                    <i className={Jurusan.star1}></i>
                    <i className={Jurusan.star2}></i>
                    <i className={Jurusan.star3}></i>
                    <i className={Jurusan.star4}></i>
                    <i className={Jurusan.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{Jurusan.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{Jurusan.price}</p>
                    <button className="btn btn-danger rounded-1">{Jurusan.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col className="text-center" data-aos="fade-up" data-aos-duration="3000">
            <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("#")}>Lihat Semua Jurusan <i className="fa-solid fa-chevron-right ms-1"></i></button>
            </Col>
          </Row> */}
        </Container>
      </div>
      <div className="slider w-100 min-vh-100">
        <Container>
          <Row>
            <Col data-aos="fade-up" data-aos-duration="3000">
              <h1 className="text-center">eskul</h1>
            </Col>
          </Row>
          <Row>
            <Col data-aos="fade-right" data-aos-duration="3000">
              <div className="conteudo">
                <div className="carrousel">
                  <article className="card-slider">
                    <h1>card-slider</h1>
                  </article>
                  <article className="card-slider">
                    <h1>card-slider</h1>
                  </article>
                  <article className="card-slider">
                    <h1>card-slider</h1>
                  </article>
                  <article className="card-slider">
                    <h1>card-slider</h1>
                  </article>
                  <article className="card-slider">
                    <h1>card-slider</h1>
                  </article>
                  <article className="card-slider">
                    <h1>card-slider</h1>
                  </article>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage;


