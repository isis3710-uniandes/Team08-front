import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class MiSolicitud extends React.Component {

constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }


handleClick = event => {

var userId1 = event.target.id;
  console.log("mira"+ userId1);

  this.props.handleSubmit(userId1);
  
}
//onClick= {this.handleClick(x)}
//var x = this.props.solicitud.id;

    render() {

      

        return (

            <div className="card cartita" >
    <div className="card-header" >
      <h2 className="mb-0">
        <button className="btn  collapsed" type="button" data-toggle="collapse" data-target=".collapseTwo" aria-expanded="false" >
          Número de solicitud {this.props.solicitud.id}
        </button>
      </h2>
    </div>
    <div  className="collapse collapseTwo"  data-parent="#accordionExample">
      <div className="card-body">
       <p>{this.props.solicitud.about}</p>
       <p><strong>Fondos:</strong> {this.props.solicitud.fondos}</p>
       <p><strong>Cantidad Faltante:</strong> {this.props.solicitud.cantidadFaltante}</p>
       <p><strong>Url de la Imagen:</strong> {this.props.solicitud.picture}</p>
       <p><strong>Registrado: </strong>{this.props.solicitud.registered}</p>

       
       <button id={this.props.solicitud.id} type="button" onClick = {this.handleClick}  className="btn btn-dark">Borrar</button>

      </div>
    </div>
  </div>

        );
    }
}