import * as service from '../Services/destinationService';

//const host = 'http://localhost:3030';
//const host = 'http://localhost:5000';
const host = 'https://server-journey-project.herokuapp.com';
service.settings.host = host;

export async function getAll(){
    let destinations = await service.get(host + '/asias');
    let result = Object.values(destinations);
    return result;
};

export async function create(data){
    return await service.post(host + '/asias', data);
};
//return await service.post(host + '/jsonstore/destinations', data);

export async function getOne(id){
    let result = await service.get(host + `/asias/${id}`);
    return result;
};

export async function edit(id, data){
    const response = await service.put(host + `/asias/${id}`, data);
    return response
}

export async function deleteDestination(id){
    return await service.del(host + `/asias/${id}`);
}