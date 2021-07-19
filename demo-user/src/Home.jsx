import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delteUser } from "./actions/userAction";
import { Link, NavLink } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert";


const Home = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = (email) => {
    confirmAlert({
      title:"Confirm To delete",
      message:"Are you sure",
      buttons:[
        {
          label:"Yes",
          onClick:() => dispatch(delteUser(email))
        },
        {
          label:"No",
          onClick: () => "not deleted"
        }
      ]
    })
  }

  return (
    <div className="container">
      <div className="row"><h1>User Dashboard</h1></div>
      <div className="row">
        <div className="four columns"></div>
        <div className="two columns">

          <NavLink to="/" ><button style={{ marginLeft: "380px" }}>Home</button></NavLink>
          <NavLink  to="/create">
            <button style={{ marginLeft: "480px" ,backgroundColor:"skyblue" }}>Create User</button>
          </NavLink>

          <table className="u-full-width" style={{marginLeft:"300px", padding:"40px", border: "1px solid black"}}>
            <thead>
              <tr>
                <th  style={{ padding:"10px" , border: "1px solid black"}}>Name</th>
                <th style={{ padding:"10px" , border: "1px solid black"}}>Email</th>
                <th style={{ padding:"10px", border: "1px solid black" }} >Phone</th>
                <th style={{ padding:"10px" , border: "1px solid black"}}>DOB</th>
                <th style={{ padding:"10px", border: "1px solid black" }}>Actions</th>

              </tr>
            </thead>
            {users.map((user) => (
              <tbody>
                <td style={{ padding:"10px",border: "1px solid black" }}> {user.name}</td>
                <td style={{ padding:"10px" , border: "1px solid black"}}>  {user.email}</td>
                <td style={{ padding:"10px" ,border: "1px solid black"}}> {user.phone}</td>
                <td style={{ padding:"10px", border: "1px solid black" }}>   {user.dob}</td>
               <td style={{ padding:"10px" , border: "1px solid black"}}>  
                 <Link to={{ pathname: "/edit", state: user }}><button style={{ backgroundColor: "skyblue", color: "black" }}>Edit</button></Link>
                <button style={{ backgroundColor: "red", color: "white", marginLeft: "5px" }} onClick={() => handleDelete(user.email)}>
                  Delete
                </button>
                </td> 
              </tbody>
            ))}</table>
        </div></div></div>
  );
};

export default Home;



{/* <p style={{backgroundColor:"red",color:"white"}}></p> */}