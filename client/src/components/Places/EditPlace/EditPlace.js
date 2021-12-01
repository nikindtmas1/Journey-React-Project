import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import * as asiaService from '../../Services/asiasData';
import * as africaService from '../../Services/africaData';
import * as europeService from '../../Services/placesData';
import * as southAmericaService from '../../Services/southAmericaData';
import * as northAmericaService from '../../Services/northAmericaData';
import * as australiaService from '../../Services/australiaData';
import * as antarticaService from '../../Services/antarticaData';


const EditPlace = ({
    match,
}) => {

    let history = useHistory();
    let location = useLocation();
    let urlPlace = location.pathname.split('/');

    let id = urlPlace[urlPlace.length - 1];


    const [currentPlace, setCurrentPlace] = useState([]);



    useEffect(() => {

        if (urlPlace.includes('place7a')) {
            antarticaService.getOne(id)
                .then(result => setCurrentPlace(result))
        } else if (urlPlace.includes('place6a')) {
            australiaService.getOne(id)
                .then(result => setCurrentPlace(result))
        } else if (urlPlace.includes('place5a')) {
            africaService.getOne(id)
                .then(result => setCurrentPlace(result))
        } else if (urlPlace.includes('place4a')) {
            asiaService.getOne(id)
                .then(result => setCurrentPlace(result))
        } else if (urlPlace.includes('place3a')) {
            europeService.getOne(id, '/places/place3a')
                .then(result => setCurrentPlace(result))
        } else if (urlPlace.includes('place2a')) {
            southAmericaService.getOne(id)
                .then(result => setCurrentPlace(result))
        } else if (urlPlace.includes('place1a')) {
            northAmericaService.getOne(id)
                .then(result => setCurrentPlace(result))
        }


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

        if (urlPlace.includes('place7a')) {
            antarticaService.edit(id, data)
                .then(history.push(`/places/${urlPlace[2]}`))
        }

        if (urlPlace.includes('place6a')) {
            australiaService.edit(id, data)
                .then(history.push(`/places/${urlPlace[2]}`))
        }

        if (urlPlace.includes('place5a')) {
            africaService.edit(id, data)
                .then(history.push(`/places/${urlPlace[2]}`));

        }

        if (urlPlace.includes('place4a')) {
            asiaService.edit(id, data)
                .then(history.push(`/places/${urlPlace[2]}`));

        }

        if (urlPlace.includes('place3a')) {
            europeService.edit(id, '/places/place3a', data)
                .then(history.push(`/places/${urlPlace[2]}`));
        }

        if (urlPlace.includes('place2a')) {
            southAmericaService.edit(id, data)
                .then(history.push(`/places/${urlPlace[2]}`))
        }

        if (urlPlace.includes('place1a')) {
            northAmericaService.edit(id, data)
                .then(history.push(`/places/${urlPlace[2]}`))
        }
    }
    return (
        <Typography >
            <Container>
                <div >
                    <div className="form-group">
                        <h1 style={{
                            textAlign: 'center',
                            fontSize: '26px',
                            fontWeight: '500',

                        }}>Edit Place</h1>

                        <form onSubmit={onSubmit} method='post'>
                            <div className="form-group">
                                <input className="form-control" type='text' name='title' defaultValue={currentPlace.title} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type='text' name='highlight' defaultValue={currentPlace.highlight} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type='text' name='imgUrl' defaultValue={currentPlace.imgUrl} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type='text' name='price' defaultValue={currentPlace.price} />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" type='text' name='gray' defaultValue={currentPlace.gray} rows='5'></textarea>
                            </div>
                            <div className="form-group">
                                <input type='submit' className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase" value='Edit' />
                            </div>
                            <th />
                            {/* <Button size='large'></Button> */}
                        </form>
                    </div>
                </div>
            </Container>
        </Typography>
    );
};

export default EditPlace;