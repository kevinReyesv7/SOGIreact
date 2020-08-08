import { api } from '../helpers';

const basePath = 'equipamiento/';

function getAll() {
    return api.get(`${basePath}`);
}

const show = async (equipamientoId) => {
    const resp = await api.get(`${basePath}/${equipamientoId}`);
    return resp;
}

function create(data) {
    return api.post(`${basePath}`, data);
}

function update(equipamientoId) {
    return api.patch(`${basePath}${equipamientoId}`);
}

//function remove(equipamientoId) {
//    return api.patch(`${basePath}?id=${equipamientoId}`);
//}

function removeTotal(equipamientoId) {
    return api.delete(`${basePath}?id=${equipamientoId}`);
}


const equipamientosService = {
    getAll,
    show,
    create,
    update,
    remove,
    removeTotal,
};

export default equipamientosService;
