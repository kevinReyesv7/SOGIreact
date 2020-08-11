import React, { useState } from 'react';
import PropTypes from "prop-types"; 
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
} from "shards-react";
// import equipamientosService from '../../services/equipamientos.service'; se hace import pero no se usa 


const Equipamiento= ({
  onSubmit, names, descriptions, lastMaintenances, ubications
  }) => {
    const [name, setName] = useState(names);
    const [description, setDescription] = useState(descriptions);
    const [lastMaintenance, setLastMaintenance] = useState(lastMaintenances);
    const [ubication, setUbication] = useState(ubications);

    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Nombre de Equipamiento</label>
                  <FormInput
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Bisturí" />
                </FormGroup>
                <FormGroup>
                  <label>Descripción del Equipamiento</label>
                  <FormInput
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}                    
                    size="lg"
                    className="mb-3"
                    placeholder="Para abrir la carne" />
                </FormGroup>
                <FormGroup>
                  <label>Última mantención del Equipamiento</label>
                  <FormInput
                    value={lastMaintenance}
                    onChange={(event) => setLastMaintenance(event.target.value)}                    
                    size="lg"
                    className="mb-3"
                    placeholder="dd-MM-yyyy" />
                </FormGroup>
                <FormGroup>
                  <label>Ubicación del Equipamiento</label>
                  <FormInput
                    value={lastMaintenance}
                    onChange={(event) => setLastMaintenance(event.target.value)}                    
                    size="lg"
                    className="mb-3"
                    placeholder="Pabellón/Quimioterapia/Recuperación" />
                </FormGroup>
              </Form>
              <Button 
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({ 'name': name, 'description': description, 'lastMaintenance': lastMaintenance })}
                // onClick={onSubmit}
                >
                  Actualizar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

Equipamiento.propTypes = {
  onSubmit: PropTypes.func,
  names: PropTypes.string,
  description: PropTypes.string,
  lastMaintenance: PropTypes.string,
  ubication: PropTypes.string,
}

Equipamiento.defaultProps = {
  onSubmit: () => {},
}

export default Equipamiento;
