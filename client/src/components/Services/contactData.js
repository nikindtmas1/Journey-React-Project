import * as service from '../Services/destinationService';

//const host = 'http://localhost:3030';
//const host = 'http://localhost:5000';
const host = 'https://server-journey-project.herokuapp.com';
service.settings.host = host;


export async function create(data){
    return await service.post(host + '/contacts', data);
};