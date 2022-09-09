import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

function AddStudents() {
  let navigate = useNavigate();
  
  const url = "https://625fa90292df0bc0f337f5e7.mockapi.io/students/";
 
 
  //using axios
  let handleSubmit = async (values) => {
    try {
      let response = await axios.post(url, values);
      console.log(response);
      if (response.status === 201) navigate("/all-students");
      else alert("Internal server error!");
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      Batch: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("required"),
      email: yup.string().email("invalid Email").required("required"),
      mobile: yup
        .string()
        .matches(/^\d{10}$/, "mobile number not valid")
        .required("required"),
      Batch: yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <div style={{paddingLeft:"100px" ,paddingRight:"100px"}}>
      <h1>Add student</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>
        <br></br>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="text "
            className="form-control"
            placeholder="Enter email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <br></br>
        <div className="form-group">
          <label for="mobile">Mobile Number</label>
          <input
            id="mobile"
            name="mobile"
            type="number"
            className="form-control"
            placeholder="Enter mobile number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div style={{ color: "red" }}>{formik.errors.mobile}</div>
          ) : null}
        </div>
        <br></br>
        <div className="form-group">
          <label for="name">Batch No.</label>
          <input
            id="Batch"
            name="Batch"
            type="text"
            className="form-control"
            placeholder="Enter mobile"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.Batch}
          />
          {formik.touched.Batch && formik.errors.Batch ? (
            <div style={{ color: "red" }}>{formik.errors.Batch}</div>
          ) : null}
        </div>
        <br></br>
        <div className="form-group" style={{paddingLeft:"500px"}}>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudents;
