import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddDevice from "./components/AddDevice";
import EditDevice from "./components/EditDevice";
import DeviceList from "./components/DeviceList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/add-device"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/add-device"} className="nav-link">
                  Add Device
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/device-list"} className="nav-link">
                  Device List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/add-device" element={<AddDevice />} />
            <Route exact path="/edit-device/:id" element={<EditDevice />} />
            <Route exact path="/device-list" element={<DeviceList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;