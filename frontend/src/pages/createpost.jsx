import React from 'react'
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/custom.css"
import { useState } from "react";
import axios from "axios";
function Createpost(){

    const[url, setUrl] = useState("")
    const[cap, setCap] = useState("")

    const submitForm = ()=> {
        var email = localStorage.getItem("userEmail")
        console.log(url, cap)
        axios.post("http://localhost:5000/createpost",{
            userEmail : email,
            postURL : url,
            postCaption : cap,
            auth_key : "nl69RtgOBWM986YRy9bs"
        })
        .then(res => {
            console.log(res.data)
        })
    }
    return (
        <div className='center'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Post URL</Form.Label>
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