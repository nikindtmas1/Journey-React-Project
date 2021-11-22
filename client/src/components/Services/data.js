import * as service from '../Services/destinationService';

const host = 'http://localhost:3030';
service.settings.host = host;

export async function getAll(){
    let destinations = await service.get(host + '/jsonstore/destinations');
    let result = Object.values(destinations);
    return result;
}