import { useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Image } from 'react-bootstrap';
import './custom-navbar.css';
import { useNavigate } from 'react-router-dom';
function Top() {
  const navigate = useNavigate();
  useEffect(() => {
    // Dropdown open on hover (desktop only)
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 991) {
          dropdown.classList.add('show');
          dropdown.querySelector('.dropdown-menu')?.classList.add('show');
        }
      });
      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 991) {
          dropdown.classList.remove('show');
          dropdown.querySelector('.dropdown-menu')?.classList.remove('show');
        }
      });
    });
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center me-4">
          <Image src="/RH_logo.png" alt="Radisson Logo" height="60" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="main-nav mx-auto align-items-center">
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <Nav.Link href="/resorts">Resorts</Nav.Link>
            <Nav.Link href="/meetings-events">Meetings & Events</Nav.Link>
            <Nav.Link href="/deals">Deals</Nav.Link>
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#review">Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#reservation">Reservation</NavDropdown.Item>
              <NavDropdown.Item href="#services">Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/lang" className="nav-border-btn">🌐 Membership</Nav.Link>
           <Button variant="dark" className="btn-login" onClick={() => navigate('/login')}>
  🔒 LOGIN
</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
