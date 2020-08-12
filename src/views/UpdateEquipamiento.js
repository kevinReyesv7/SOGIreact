import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Equipamientoupdate from "../components/forms/Equipamientoupdate";
import equipamientosService from '../services/equipamientos.service';

class UpdateEquipamiento extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      lastMaintenance: "",
      ubication: "",
      id: this.props.match.params.id,
    }
  }

  componentDidMount() {    
    this._asyncRequest = equipamientosService.show(this.state.id).then(      
      response => {        
        this._asyncRequest = null;        
        this.setState({
          name:response.data.name,
          description: response.data.description,
          lastMaintenance: response.data.lastMaintenance,
          ubication: response.data.ubication
        });    
      }    
      );  
    }
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
    // this.handleEquipamientoSubmit = this.handleEquipamientoSubmit.bind(this);
    //equipamientosService.show(this.state.id).then((response) => {
    //  this.setState({
    //    name: response.data.name,
    //    description: response.data.description,
    //  })
    //});
  

  handleEquipamientoSubmit(data) {
    equipamientosService.update(this.state.id, data)
      .then((response) => {console.log(response); window.location.reload()})
      .catch((error) => console.log(error));
  }
  
  render() {
      return this.state.name ? (
        <Container fluid className="main-content-container px-4 pb-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Actualizar Equipamiento" subtitle="AlphaOmega" className="text-sm-left" />
          </Row>
          <Equipamientoupdate
            onSubmit={this.handleEquipamientoSubmit} names={this.state.name} descriptions={this.state.description} lastMaintenances={this.state.lastMaintenance} ubications={this.state.ubication}
          ></Equipamientoupdate>
        </Container>
      ): null;
    }
  }



export default UpdateEquipamiento;
