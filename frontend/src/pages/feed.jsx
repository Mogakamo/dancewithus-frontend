import { Navbar, Container, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import axios from "axios";
function Feed(){

    function getPosts(email) {
        axios.get("http://localhost:5000/fetchposts",{
            userEmail : email
        }).then(res => {
            console.log(res.data)
        })
    }

    var email = localStorage.getItem("userEmail")
    useEffect(() => {
        getPosts(email);
    })
    return(
        <div>
            <Navbar>
        <Container>
            <Navbar.Brand href="#home">AM.US</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <ListGroup>
            <ListGroup.Item><iframe width="560" height="315" src="https://www.youtube.com/embed/jHNNMj5bNQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></ListGroup.Item>
        </ListGroup>
        </div>
    )
}

export default Feed;