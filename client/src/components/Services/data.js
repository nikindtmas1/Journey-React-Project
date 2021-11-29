import * as service from '../Services/destinationService';

//const host = 'http://localhost:3030';
const host = 'http://localhost:5000';
service.settings.host = host;

export const login = service.login;
export const register = service.register;
export const logout = service.logout;

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
    return result;
};

export async function edit(id, data){
    const response = await service.put(host + `/journey/destinations/${id}`, data);
    return response
}

export async function deleteDestination(id){
    return await service.del(host + `/journey/destinations/${id}`);
}