import { api } from '../helpers';

const basePath = 'v1/equipo';

function getAll() {
    return api.get(`${basePath}/getAll`);
}

function show(teamId) {
    return api.get(`${basePath}/equipo?id=${teamId}`)
}

function create(data) {
    return api.post(`${basePath}/equipo`, data);
}

const teamsService = {
    getAll,
    show,
    create,
};

export default teamsService;