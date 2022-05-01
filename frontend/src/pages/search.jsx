import { Navbar, Container, Nav, Form, FormControl, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/feed.css"
export default function Search(){
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">AM.US</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <ListGroup>
                <ListGroup.Item><iframe width="560" height="315" src="https://www.youtube.com/embed/T94PHkuydcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ListGroup.Item>
                <ListGroup.Item><iframe width="560" height="315" src="https://www.youtube.com/embed/T94PHkuydcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ListGroup.Item>
                <ListGroup.Item><iframe width="560" height="315" src="https://www.youtube.com/embed/T94PHkuydcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ListGroup.Item>
            </ListGroup>
        </div>
    )
}