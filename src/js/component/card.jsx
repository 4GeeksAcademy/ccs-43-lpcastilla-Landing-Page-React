import React from "react";
import ReactDOM from "react-dom";




export const Card = function () {
    return (
        <div className="container">
            <div className="card-group">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Título de la tarjeta</h5>
                    <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                    <p className="card-text"><small className="text-muted">Última actualización hace 3 minutos</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Título de la tarjeta</h5>
                    <p className="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
                    <p className="card-text"><small className="text-muted">Última actualización hace 3 minutos</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Título de la tarjeta</h5>
                    <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
                    <p className="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
                    </div>
                </div>
                </div>
        </div>
    
    )
    
        
};

