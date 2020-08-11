import React, { Component } from "react";
import {
  Container,
  Row,
  Button
} from "shards-react";
import { Link } from 'react-router-dom';
import PageTitle from "../components/common/PageTitle";
import equipamientosService from '../services/equipamientos.service';

class ListarEquipamiento extends Component {

  constructor(props) {
    super(props);
    this.state = {
        equipamientos: [],
        //id: this.props.match.params.id,
      }
  //this.handleEquipamientoDelete = this.handleEquipamientoDelete.bind(this);
  }

  
  handleEquipamientoDelete(id) {
    if(window.confirm("Deseas eliminar este equipamiento de forma definitiva?")){
    equipamientosService.remove(id)
      .then((response) => {console.log(response); window.location.reload()})
      .catch((error) => console.log(error));
    //window.location.reload(true);
  }
}

  componentDidMount() {
    equipamientosService.getAll().then((response) => {
      this.setState({
        ...this.state,
        equipamientos: response.data,
      })
    });
  }


  render() {
    const { equipamientos } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Lista de Equipamientos" subtitle="AlphaOmega" className="text-sm-left" />
        </Row>

        <Row>
					<table className="table">
            <thead>
              <tr>
                <th>Equipamiento</th>
                <th>Descripción</th>
                <th>Ubicación</th>
                <th>Última mantención</th>
                <th>Fecha creación</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
          {equipamientos.map((equipamiento, index) => {
            return (
							<tbody>
								<tr>
									<td>{equipamiento.name}</td>
									<td>{equipamiento.description}</td>
                  <td>{equipamiento.ubication}</td>
                  <td>{equipamiento.lastMaintenance}</td>
									<td>{equipamiento.createAt}</td>
                  <td><Link to={`/actualizar-equipamiento/${equipamiento.id}`}> Actualizar </Link></td>
                  <td><Button
                      theme="primary"
                      className="mb-2 mr-1"
                      onClick={(event) => this.handleEquipamientoDelete(equipamiento.id)}>Eliminar</Button>
                  </td>
								</tr>
							</tbody>
            )
          })}
					</table>
        </Row>
      </Container>
    );
  }
};

export default ListarEquipamiento;
