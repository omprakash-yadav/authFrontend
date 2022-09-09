import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  //let context = useContext(studentContext)

  let params = useParams();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [Batch, setClass] = useState("");
  const url = "https://625fa90292df0bc0f337f5e7.mockapi.io/students/";

  useEffect(() => {
    getData();
  }, []);

  

  //using axios
  let getData = async () => {
    try {
      let response = await axios.get(url + params.id);

      setName(response.data.name);
      setEmail(response.data.email);
      setMobile(response.data.mobile);
      setClass(response.data.Batch);
    } catch (error) {
      console.log(error);
    }
  };

  
  //usin Axios

  let handleSubmit = async () => {
    try {
      let response = await axios.put(url + params.id, {
        name,
        email,
        mobile,
        Batch,
      });
      if (response.status === 200) {
        navigate("/all-students");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form className="edit-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            value={mobile}
            type="text"
            placeholder=" Enter mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your mobile number with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Class</Form.Label>
          <Form.Control
            value={Batch}
            type="text"
            placeholder="Enter batch name"
            onChange={(e) => setClass(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default EditStudent;
