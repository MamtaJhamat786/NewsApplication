import "./App.css";
import { useSelector } from "react-redux";
import React from "react";
import Home from "./components/views/Home";
import Login from "./components/views/Login";
import Profile from "./components/views/Profile";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App () {
  const isAuth=  useSelector(state =>state.auth.isAuthenticated)

    return (
      <Router>
      <Switch>
      { !isAuth && <Login/>}
      { isAuth && (
        <main className="container">
        <Navbar/>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Home}></Route>
            <Route path="/profile" component={Profile} />
            <Route path="/not-found" component={NotFound}></Route> 
        </main>
      )} 
      </Switch>
      </Router>
    );
  }

export default App;
