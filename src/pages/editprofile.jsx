import React from 'react'
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/custom.css"
import { useState } from "react";
function Createpost(){

    const[url, setUrl] = useState("")
    const[cap, setCap] = useState("")

    const submitForm = ()=> {
        console.log(url, cap)
    }
    return (
        <div className='center'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Profile Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter URL here" value={url} onChange={(e)=> setUrl(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Caption</Form.Label>
                <Form.Control type="text" placeholder="Caption" value={cap} onChange={(e)=>{setCap(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={submitForm}>
                Post
            </Button>
            </Form>
        </div>
    )
}

export default Createpost;