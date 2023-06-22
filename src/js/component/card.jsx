import React from "react";
import ReactDOM from "react-dom";




export const Card = function () {
    return (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                <img src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?q=10&h=200" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Leonardo: desarrollador Full-Stack</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                <a href="#" className="btn btn-secondary">Mas informacion sobre leonardo</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg?q=10&h=200" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nicolas: desarrollador Full-Stack</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-secondary">Mas informacion sobre nicolas</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?desarrollador Full-Stack" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Jesus: desarrollador Full-Stack</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-secondary">Mas informacion sobre jesus</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    
    )
    
        
};

