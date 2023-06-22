import React from 'react';
import ReactDOM from "react-dom";

export let NavBar = function () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container" style={{ backgroundColor: 'black' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ color: 'white' }}>Start bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'flex-end', display: 'flex' }}>
              <div className="navbar-nav">
                  <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="#">Home</a>
                  <a className="nav-link active" style={{ color: 'white' }} href="#">About</a>
                  <a className="nav-link active" style={{ color: 'white' }} href="#">Services</a>
                  <a className="nav-link active" style={{ color: 'white' }} href="#">Contact</a>
              </div>
          </div>
      </div>
  </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary container" style="background-color: black;">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style="color: white">Start bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style="justify-content: flex-end; display: flex;">
                  <div className="navbar-nav">
                      <a className="nav-link active" style="color: white" aria-current="page" href="#">Home</a>
                      <a className="nav-link active" style="color: white" href="#">About</a>
                      <a className="nav-link active" style="color: white" href="#">Services</a>
                      <a className="nav-link active" style="color: white" href="#">Contact</a>
                  </div>
              </div>
        </div>
    </nav>
  )
}
