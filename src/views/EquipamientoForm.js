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
    
    this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
  }

  handleTeamSubmit(data) {
    equipamientosService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Añadir Nuevo Equipamiento" subtitle="SOGI" className="text-sm-left" />
        </Row>

        <Equipamiento
          onSubmit={this.handleEquipamientosubmit}
        ></Equipamiento>
      </Container>
    );
  }
};

export default AddNewEquipamiento;
