import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";
import { Link } from 'react-router-dom';
import PageTitle from "../components/common/PageTitle";
import equipamientosService from '../services/equipamientos.service';

class ListarEquipamiento extends Component {

  //constructor(props) {
  //  super(props);
  //  this.handleEquipamientoDelete = this.handleEquipamientoDelete.bind(this);
  //  this.state = {
  //      equipamientos: [],
  //    }
  //}

  //handleEquipamientoDelete(id) {
  //  equipamientosService.remove(id)
  //    .then((response) => console.log(response))
  //    .catch((error) => console.log(error));
  //}

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
                <th>Id</th>
                <th>Equipamiento</th>
                <th>Descripción</th>
                <th>Última mantención</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
          {equipamientos.map((equipamiento, index) => {
            return (
							<tbody>
								<tr>
									<td>{equipamiento.id}</td>
									<td>{equipamiento.name}</td>
									<td>{equipamiento.description}</td>
									<td>{equipamiento.lastMaintenance}</td>
                  <td><Link to={`/actualizar-equipamiento/${equipamiento.id}`}> actualizar </Link></td>
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
