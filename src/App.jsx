import React from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Project from './components/project/Project';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
   <>
   <BrowserRouter>

       <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>My App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/service">
            <Nav.Link>Service</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/project">
            <Nav.Link>Project</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Routes>
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
