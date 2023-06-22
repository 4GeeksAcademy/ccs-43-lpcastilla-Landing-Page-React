import React from "react";
import ReactDOM from "react-dom";

export let Jumbotron = function () {
    return (
        <div className="container mx-auto m-0 p-0" style={{ width:'85%'}}>
            <div className="card bg-light m-4">
                <div className="card-body">
                <h1 className="card-title">A Warm Welcome!</h1>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores, delectus cum eligendi sunt distinctio, quisquam quidem similique obcaecati magni veniam eos perferendis cumque iste. Assumenda autem delectus tempora molestiae.</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </div>
    )
}
    