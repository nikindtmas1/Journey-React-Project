import * as placeServices from '../Services/destinationService';

//const host = 'http://localhost:3030';
//const host = 'http://localhost:5000';
const host = 'https://server-journey-project.herokuapp.com';
placeServices.settings.host = host;



export async function getAll(endUrl){
    let places = await placeServices.get(host +  `${endUrl}`);
    let result = Object.values(places);
    return result;
};

export async function create(data, endUrl){
    return await placeServices.post(host +  `${endUrl}`, data);
};
//return await service.post(host + '/jsonstore/destinations', data);

export async function getOne(id, endUrl){
    let result = await placeServices.get(host + `${endUrl}/${id}`);
    return result;
};

export async function edit(id,endUrl, data){
    const response = await placeServices.put(host + `${endUrl}/${id}`, data);
    return response
}

export async function deleteDestination(id, endUrl){
    return await placeServices.del(host + `${endUrl}/${id}`);
}