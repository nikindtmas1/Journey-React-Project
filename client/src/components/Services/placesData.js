import * as placeServices from '../Services/destinationService';

//const host = 'http://localhost:3030';
const host = 'http://localhost:5000';
service.settings.host = host;
const collection = '/journey/places';


export async function getAll(endUrl){
    let places = await placeServices.get(host + collection + endUrl);
    let result = Object.values(places);
    return result;
};

export async function create(data, endUrl){
    return await placeServices.post(host + collection + endUrl, data);
};
//return await service.post(host + '/jsonstore/destinations', data);

export async function getOne(id){
    let result = await placeServices.get(host + `${collection}/${endUrl}/${id}`);
    return result;
};

export async function edit(id, data){
    const response = await placeServices.put(host + `${collection}/${endUrl}/${id}`, data);
    return response
}

export async function deleteDestination(id){
    return await placeServices.del(host + `${collection}/${endUrl}/${id}`);
}