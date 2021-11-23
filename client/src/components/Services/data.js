import * as service from '../Services/destinationService';

const host = 'http://localhost:3030';
//const host = 'http://localhost:5000';
service.settings.host = host;

export async function getAll(){
    let destinations = await service.get(host + '/jsonstore/destinations');
    let result = Object.values(destinations);
    return result;
};

export async function create(data){
    return await service.post(host + '/jsonstore/destinations', data);
};