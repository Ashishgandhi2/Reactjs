import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import CreateUserForm from "./CreateUserForm";
import EditUser from "./EditUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink style={{ marginLeft: "300px" }} to="/create">
            Create User
          </NavLink>
        </navbar> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateUserForm} />
        <Route exact path="/edit" component={EditUser} />
      </BrowserRouter>
    </div>
  );
};

export default App;
