import {Container, Row, Col} from 'react-bootstrap';

const FooterComponents = () => {
  return (
    <div className="footer py-5">
        <Container>
          <Row>
            <Col>
            <h3 className="fw-bold">SMK GOLDEN</h3>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam natus harum? Laboriosam rem veniam quod soluta laudantium iste repudiandae?</p>
            <div className='no mb-1 mt-4'>
              <i className="fa-brands fa-whatsapp"></i>
              <p className='m-0'>+62 85678787878</p>
            </div>
            <div className='mail'>
              <i className="fa-regular fa-envelope"></i>
              <p className='m-0'>smkgolden@gmail.com</p>
            </div>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <p>&copy; Copyright {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default FooterComponents