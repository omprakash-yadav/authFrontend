import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordMatch, setMatch] = useState("");
  let role = 2;
  //let basUrl="http://localhost:4000/users"
  let basUrl = "https://auth-stack.herokuapp.com/users";
  let handleSubmit = async () => {
    let res = await axios.post(`${basUrl}/login`, {
      email,
      password,
      role,
    });
    //console.log(res);
    if (res.data.statusCode === 200) {
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("firstName", res.data.firstName);
      navigate("/dashboard");
    }
  };

  return (
    <div className="wrapper">
      <h2 className="header"> Login to have access</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <div className="buttn">
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </Button>
          {passwordMatch ? (
            <div style={{ color: "red" }}>password should match!</div>
          ) : (
            <></>
          )}
        </div>
      </Form>
    </div>
  );
}
export default Login;
