import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "https://625fa90292df0bc0f337f5e7.mockapi.io/students/";
function AllStudents() {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  

  // get using axios
  let getData = async () => {
    try {
      let response = await axios.get(url);
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  //delete using axios

  let handleDelet = async (i) => {
    try {
      let response = await axios.delete(url + i);
      //console.log("delete"+response)
      if (response.status === 200) getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  style={{paddingLeft:"60px" ,paddingRight:"60px"}}>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Sr.no.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((eliment,id) => {
            return (
              <tr key={eliment.id}>
                <td>{id}</td>
                <td>{eliment.name}</td>
                <td>{eliment.email}</td>
                <td>{eliment.mobile}</td>
                <td>{eliment.Batch}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelet(eliment.id)}>
                    Delet
                  </Button>
                  <span>&nbsp;</span>
                  <Link to={`/edit-student/${eliment.id}`}>
                    <Button variant="warning">Adit</Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AllStudents;
