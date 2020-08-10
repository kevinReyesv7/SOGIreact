import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Equipamiento from "../components/forms/Equipamiento";
import equipamientosService from '../services/equipamientos.service';

class UpdateEquipamiento extends Component {

  constructor(props) {
    super(props);
      this.state = {
        name: "",
        description: "",
        id: this.props.match.params.id,
    }

    this.handleEquipamientoSubmit = this.handleEquipamientoSubmit.bind(this);
    //equipamientosService.show(this.state.id).then((response) => {
    //  this.setState({
    //    name: response.data.name,
    //    description: response.data.description,
    //  })
    //});
  }

  handleEquipamientoSubmit(data) {
    equipamientosService.update(this.state.id, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  
  render() {
    console.log(this.state.name)
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Editar Equipamiento" subtitle="AlphaOmega" className="text-sm-left" />
        </Row>
        <Equipamiento
          onSubmit={this.handleEquipamientoSubmit} names={this.state.name} descriptions={this.state.description}
        ></Equipamiento>
      </Container>
    );
  }
};

export default UpdateEquipamiento;
