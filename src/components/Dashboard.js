import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  let navigate = useNavigate();
  let name=sessionStorage.getItem("firstName")
  useEffect(() => {
    checkAuth();
  });
  let Logout=()=>{
    sessionStorage.clear();
    navigate("/login")
  }
  let checkAuth = async () => {
    let token = sessionStorage.getItem("token");
    if (token) {
      let config = {
        headers: {
          token: token,
        },
      };

      let res = await axios.post("http://localhost:4000/users/auth", {
        purpose: "Validate to Access",
        //config,

      },config);
      if(res.data.statusCode !==200){
        sessionStorage.clear()
        navigate("/login")
      }
      
      //console.log(res);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{name} you are Authentikated</h1>
      </div>
      <button
        style={{ color: "white", background: "blue" }}
        onClick={() => checkAuth()}
      >
        Test Auth
      </button>
       <button
        style={{ color: "white", background: "blue" }}
        onClick={() => Logout()}
      >
        Logout
      </button>
    </>
  );
}
export default Dashboard;
