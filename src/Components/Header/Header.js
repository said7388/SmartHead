import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import img from "../../Images/footer_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="header" variant='dark'>
        <Container>
          <Navbar.Brand href='#home'><Link to="/"><img src={img} alt="" /></Link></Navbar.Brand>
          <Nav className='me-50'>
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About Us</Link></Nav.Link>
            <Nav.Link><Link to='/service'>Service</Link></Nav.Link>
            <Nav.Link><Link to='/courses'>Explore Courses</Link></Nav.Link>
            <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
