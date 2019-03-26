import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListaDonacion from "./lista_donacion";
import SolicitudList from "./solicitud_list";
import MyForm from "./MyForm";
import Points from "./points";
import MisSolicitudes from "./misSolicitudes";
import AgregarDonacion from "./agregar_donacion";
import FormDonacion from './form_donacion.js';
import VerDonaciones from './ver_donaciones';
import Sol_list from "./sol_list";

export default class App extends React.Component {

  
  renderAcerca(){
    return (
        <div className="col-12">
          <h5>Acerca de DONU</h5>
          <p>Donu es una plataforma web que pretender facilitar el proceso de donaciones entre las personas y las ONG En esta plataforma pretendemos que tanto los usuario y las ong puedan decir los elementos que pueden donar y los que realmente necesitan.</p>
          <hr/>
        </div>
      );
  }

  renderFooter(){
    return(
        <div>
          <footer className="section footer-clasic context-dark bg-dark">
            <div className="container">
              <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><Link to="/" className="brand"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcSet="images/agency/logo-retina-inverse-280x74.png 2x"/></Link>
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><Link to="/">dkstudioin@gmail.com</Link></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><Link to="/">+91 7568543012</Link> <span>or</span> <Link to="/">+91 9571195353</Link>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Proyectos</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Contactos</Link></li>
                <li><Link to="/">Precios</Link></li>
              </ul>
            </div>
          </div>
            </div>
          </footer>
        </div>
      );
  }

  
  Inicio=()=>{
    return (
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-6">
            <div className="row">
            {this.renderAcerca()}
            <div className="col-12">
              <h5>¿Estás interesado en donar?</h5>
              <p>¡Realiza una donación, mira la evidencia de tus buenas acciones y gana puntos con tan sólo un click!</p>
            </div>
          </div>
          </div>
          <div className="col-6">
            <FormDonacion/>
          </div>
        </div>
        <hr/>
        <div className="text-center">
          <h3 className="text-left">Algunas donaciones hechas:</h3>
          <ListaDonacion max={3}/>
          <button type="button" className="btn btn-dark"><Link to="/donaciones/">Ver más</Link></button>
        </div>
        <Points/>
        {this.renderFooter()}
      </div>
      );
  }


  Donar=()=>{
    return (<AgregarDonacion/>);
  }

  Donaciones=()=>{
    return (<VerDonaciones/>);
  }

  miSolicitudes=()=>{
    return (
      <div className="container text-center">
        <hr/>
        <h2>¡Actualmente estas son sus solicitudes!</h2>
        <hr/>
        <MisSolicitudes/>
        <br/>
        <Link to="/"><button className="btn btn-dark">Volver a inicio</button></Link>
      </div>
      );
  }
  soli=()=>{
    return (
      <div className="container text-center">
        <hr/>
        <h2>¡No esperes más para ayudar a los demás!</h2>
        <hr/>
        <Sol_list/>
        <br/>
        <Link to="/"><button className="btn btn-dark">Volver a inicio</button></Link>
      </div>
      );
  }

  render() {
    return (
      <Router>
        <nav id="navvv" className="navbar navbar-expand-sm  bg-dark fixed-top">
          <Link to="/" className="navbar-brand"><img src="/images/donu_logo.png" alt="Donu logo" weigth="40px;" height="40px;"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav top-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Donaciones
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/agregar_donacion/">Donar</Link>
                  <Link className="dropdown-item" to="/donaciones/">Ver donaciones</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/misSolicitudes/">Mis Solicitudes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/soli/">Solicitudes</Link>
              </li>
              <li className="nav-item">
                   <button  className="nav-link" data-toggle="modal" data-target="#myModal">Crear Solicitud</button>
              </li>
            </ul>
          </div>
        </nav>

        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">            
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Cree su Solicitud</h4>
              </div>
              <div id = "elfooter">
                  <MyForm/>
                </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <Route path="/" exact component={this.Inicio} />
        <Route path="/agregar_donacion/" component={this.Donar} />
        <Route path="/donaciones/" component={this.Donaciones} />
        <Route path= "/misSolicitudes" component= {this.miSolicitudes}/>
        <Route path= "/soli" component= {this.soli}/>
      </Router>
    );
  }
}