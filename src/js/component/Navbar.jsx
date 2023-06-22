import React from 'react';
import ReactDOM from "react-dom";

export let NavBar = function () {
  return (
      <div className="a" style={{ backgroundColor: 'black'}}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ color: 'white' }}>Start bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <i class="fa-solid fa-bars" style={{ color: 'white' }}></i>
    </button>
    <div className="navbar-collapse collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'flex-end', color: 'white'}}>
              <div className="navbar-nav">
                  <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="#">Home</a>
                  <a className="nav-link active" style={{ color: 'white' }} href="#">About</a>
                  <a className="nav-link active" style={{ color: 'white' }} href="#">Services</a>
                  <a className="nav-link active" style={{ color: 'white' }} href="#">Contact</a>
              </div>
          </div>
      </div>
  </nav>
      </div>
  )
}
