import React from 'react'
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/custom.css"
import { useState } from "react";
import axios from "axios";
function Signup(){
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");
    const [cpsw, setCpsw] = useState("");

    const submitForm = () => {
        if(psw === cpsw) {
            axios.post(`http://localhost:5000/signup`,{
                userEmail : email,
                userPassword: psw,
                auth_key : "nl69RtgOBWM986YRy9bs"
            })
            .then(res => {
                if (res.data["status"] === 1){
                localStorage.setItem("userEmail",email)
                localStorage.setItem("userPassword",psw)
                console.log(res.data)
            }else{
                console.log(res.data["userDetails"])
            }})
            } else {
                    console.log("Passwords do not match")
            }
        
    }
    return (
        <div className='center'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={psw} onChange={(e)=>{setPsw(e.target.value)}} />
                <Form.Text className="text-muted">
                Shhh...we'll keep this a secret
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password again" value={cpsw} onChange={(e)=>{setCpsw(e.target.value)}} />
                <Form.Text className="text-muted">
                Shhh...we'll keep this a secret
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the terms and conditions" />
            </Form.Group>
            <Button variant="primary" type='button' onClick={submitForm}>
                Sign Up
            </Button>
            </Form>
        </div>
    )
}

export default Signup;