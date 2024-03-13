import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import Dropdown from 'react-bootstrap/Dropdown';

import Card from 'react-bootstrap/Card';



const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 0){
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">SMK GOLDEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {/* {navLinks.map((link) => {
              return (
                <div class="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""} end >{link.text}</NavLink>
                </div>
              );
            })} */}

            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Beranda
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Sejarah</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Profil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Gatau lagi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Berita
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">berita terbaru</Dropdown.Item>
                <Dropdown.Item href="#/action-2">sedang panas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">sering dikunjungi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Jurusan
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">TJKT</Dropdown.Item>
                <Dropdown.Item href="#/action-2">MPLB</Dropdown.Item>
                <Dropdown.Item href="#/action-3">PM</Dropdown.Item>
                <Dropdown.Item href="#/action-3">HOTEL</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <ul className="list">
              <li><a href="#">eskul</a></li>
              <li><a href="#">kontak</a></li>
            </ul>
            
          </Nav>

          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1" >Contact Admin</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponents