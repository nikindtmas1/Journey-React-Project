import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import * as asiaService from '../../Services/asiasData';
import * as africaService from '../../Services/africaData';
import * as europeService from '../../Services/placesData';
import * as southAmericaService from '../../Services/southAmericaData';



const EditPlace = ({
    match,
}) => {

    let history = useHistory();
    let location = useLocation();
    let urlPlace = location.pathname.split('/');

   let id = urlPlace[urlPlace.length - 1];
  
   
    const [currentPlace, setCurrentPlace] = useState([]);

    // let service;

    // if (urlPlace.includes('place4a')) {
    //     service = asiaService;
    // }else if(urlPlace.includes('place5a')){
    //     service = africaService;
    // }else if(urlPlace.includes('place3a')){
    //     service = europeService;
    // }

    useEffect(() => {

        if (urlPlace.includes('place4a')) {
            asiaService.getOne(id)
            .then(result => setCurrentPlace(result))
        }else if(urlPlace.includes('place5a')){
            africaService.getOne(id)
            .then(result => setCurrentPlace(result))
        }else if(urlPlace.includes('place3a')){
            europeService.getOne(id, '/places/place3a')
            .then(result => setCurrentPlace(result))
        }else if (urlPlace.includes('place2a')){
            southAmericaService.getOne(id)
            .then(result => setCurrentPlace(result))
        }
            // service.getOne(id)
            // .then(result => setCurrentPlace(result))
        
    }, []);

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget)
        let title = formData.get('title');
        let highlight = formData.get('highlight');
        let imgUrl = formData.get('imgUrl');
        let price = formData.get('price');
        let gray = formData.get('gray');

        let data = { title, highlight, imgUrl, price, gray }

        if(urlPlace.includes('place4a')){
            asiaService.edit(id, data)
        .then(history.push(`/places/${urlPlace[2]}`));

        }
        
        if(urlPlace.includes('place5a')){
           africaService.edit(id, data)
        .then(history.push(`/places/${urlPlace[2]}`));

        }
        
        if(urlPlace.includes('place3a')){
            europeService.edit(id,'/places/place3a', data)
        .then(history.push(`/places/${urlPlace[2]}`));
        }
        
        if(urlPlace.includes('place2a')){
            southAmericaService.edit(id, data)
            .then(history.push(`/places/${urlPlace[2]}`))
        }
    }
    return (
        <Typography className='dm-com'>
        <Container>
            <div>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '26px',
                    fontWeight: '500',

                }}>Create Place</h1>
                <form onSubmit={onSubmit}>
                    <input  type='text' name='title' defaultValue={currentPlace.title} />
                    <input  type='text' name='highlight' defaultValue={currentPlace.highlight} />
                    <input  type='text' name='imgUrl' defaultValue={currentPlace.imgUrl} />
                    <input  type='text' name='price' defaultValue={currentPlace.price} />
                    <textarea  type='text' name='gray' defaultValue={currentPlace.gray} ></textarea>
                    <th />
                    <input type='submit' />
                    {/* <Button size='large'></Button> */}
                </form>
            </div>
        </Container>
    </Typography>
    );
};

export default EditPlace;