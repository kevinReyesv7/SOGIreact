import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Equipamiento from "../components/forms/Equipamiento";
import equipamientosService from '../services/equipamientos.service';

class AddNewEquipamiento extends Component {

  constructor(props) {
    super(props);
    
    this.handleEquipamientoSubmit = this.handleEquipamientoSubmit.bind(this);
  }

  handleEquipamientoSubmit(data) {
    equipamientosService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Añadir Nuevo Equipamiento" subtitle="AlphaOmega" className="text-sm-left" />
        </Row>

        <Equipamiento
          onSubmit={this.handleEquipamientoSubmit}
        ></Equipamiento>
      </Container>
    );
  }
};

export default AddNewEquipamiento;
