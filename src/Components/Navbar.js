import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

function NavScrollExample() {
  const LogOut = () => {
    localStorage.removeItem("accessToken")
    window.location.replace("/Login")
  }

  return (
    <div  data-testid="navbar-1">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-5'>MovieCom</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/Movies">Movies</Nav.Link>
            <Nav.Link href="/Shows">Shows</Nav.Link>
            <Nav.Link href="/Favourite">My Favourite</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='me-2' variant="outline-danger">Search</Button>
            <div className='text-danger border border-danger px-2 rounded text-allign-center py-2'>
              <NavDropdown title="Profile" id="dropdown-button-drop-start" drop={"start"}>
                <NavDropdown.Item className='me-5' href="/Profile">My Profile</NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item className='me-5' onClick={LogOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;