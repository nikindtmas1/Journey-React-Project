import * as service from '../Services/destinationService';

//const host = 'http://localhost:3030';
const host = 'http://localhost:5000';
service.settings.host = host;

export async function getAll(){
    let destinations = await service.get(host + '/journey/destinations');
    let result = Object.values(destinations);
    return result;
};

export async function create(data){
    return await service.post(host + '/journey/destinations', data);
};
//return await service.post(host + '/jsonstore/destinations', data);

export async function getOne(id){
    let result = await service.get(host + `/journey/destinations/${id}`);
    console.log(Object.values(result));
    return Object.values(result);
};