import React from 'react';
import {IntlProvider,FormattedMessage,addLocaleData} from "react-intl";
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
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "../locales/es";
import localeEnMessages from "../locales/en";
import App1 from "./app1";

addLocaleData([...enLocaleData,...esLocaleData]);
let i18nConfig = {
      locale: 'en',
      messages: localeEnMessages
  };
export default class App extends React.Component {
  

  componentDidMount(){
    var lang = navigator.language
    console.log(lang);
    switch (lang) {
              case 'es-ES': i18nConfig.messages = localeEsMessages; break;
              case 'EN': i18nConfig.messages = localeEnMessages; break;
              default: i18nConfig.messages = localeEnMessages; break;
          }
    this.setState({ locale: lang });
    i18nConfig.locale = lang;
  }

  renderAcerca(){
    return (
        <div className="col-12">
          <p className="acercah5"><FormattedMessage id="about_donu"/></p>
          <p><FormattedMessage id="about_donu_description"/></p>
          <hr/>
        </div>
      );
  }

  
  
  Inicio=()=>{
    return (
      <div>
        <div id="demo1" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators" >
            <li data-target="#demo1" data-slide-to="0" className="active"></li>
            <li data-target="#demo1" data-slide-to="1" className=""></li>
            <li data-target="#demo1" data-slide-to="2" className=""></li>
          </ul>
          <div id="negro" className="carousel-inner">
            <div className="carousel-item active">
            <FormattedMessage id="image1">
            {src=>
              <img className="demo0 img-fluid" src={src} alt={src}/>
            }
            </FormattedMessage>
                
            </div>
            <div class="carousel-item">
              <FormattedMessage id="image2">
              {src=>
                <img className="demo0 img-fluid" src={src} alt={src}/>
              }
              </FormattedMessage>
              <div id="negrooo" className="centered2 carousel-caption d-none d-md-block"><h1 className="text-dark">.</h1></div>    
            </div>
            <div className="carousel-item">
              <FormattedMessage id="image3">
              {src=>
                <img className="demo0 img-fluid" src={src} alt={src}/>
              }
              </FormattedMessage>  
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo1" data-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
             <span class="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#demo1" data-slide="next">
            <span className="carousel-control-next-icon white "></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="container">
          <hr/>
          <div className="row">
            <div className="col-6">
              <div className="row">
              {this.renderAcerca()}
              <div className="col-12">
                <p className = "acercah5"><FormattedMessage id="interested_donate"/></p>
                <p><FormattedMessage id="interested_donate_description"/></p>
              </div>
            </div>
            </div>
            <div className="col-6">
              <FormDonacion/>
            </div>
          </div>
          <hr/>
          <div className="text-center">
            <h2 className="text-left"><FormattedMessage id="some_donations"/></h2>
            <ListaDonacion max={3}/>
            <button type="button" className="btn btn-dark text-white" ><a  className = "text-white" href="/donaciones/"><FormattedMessage id="more"/></a></button>
          </div>
          <hr/>
          <Points/>
        </div>
        </div>
        );
  }

  token=()=>{
    return(
        <div>
            <h1 className="text-center">
              <FormattedMessage id="token_title"/>
            </h1>
            <p className="text-center">Token: {localStorage.getItem('token')}</p>
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
        <h1><FormattedMessage id="my_requests_title"/></h1>
        <hr/>
        <MisSolicitudes/>
        <br/>
        <Link to="/"><button className="btn btn-dark"><FormattedMessage id="back_home"/></button></Link>
      </div>
      );
  }
  soli=()=>{
    return (
      <div className="container text-center">
        <hr/>
        <h1><FormattedMessage id="soli_title"/></h1>
        <hr/>
        <Sol_list/>
        <br/>
        <Link to="/"><button className="btn btn-dark"><FormattedMessage id="back_home"/></button></Link>
      </div>
      );
  }

  render() {
    return (
      
      <IntlProvider key={i18nConfig.locale} locale={i18nConfig.locale} messages={i18nConfig.messages}>
        <Router>

         

          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"><FormattedMessage id="my_form_title"/></h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                 <MyForm/>
              </div>
            </div>
          </div>  
          <Route path="/" exact component={this.Inicio} />
          <Route path="/agregar_donacion/" component={this.Donar} />
          <Route path="/donaciones/" component={this.Donaciones} />
          <Route path= "/misSolicitudes" component= {this.miSolicitudes}/>
          <Route path= "/soli" component= {this.soli}/>
          <Route path= "/token" component= {this.token}/>
  
        </Router>
      </IntlProvider>
    );
  }
}