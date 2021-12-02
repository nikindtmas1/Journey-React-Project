import { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import * as placeService from '../../Services/placesData';
import * as asiaService from '../../Services/asiasData';
import * as africaService from '../../Services/africaData';
import * as soutAmericaService from '../../Services/southAmericaData';
import * as northAmericaService from '../../Services/northAmericaData';
import * as australiaService from '../../Services/australiaData';
import * as antarticaService from '../../Services/antarticaData';
import AuthCxt from '../../../contexts/AuthCxt';

// import { Button } from '@mui/material';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography'
// import { fontSize } from '@mui/system';


const Demo = ({
    
}) => {
    let history = useHistory();
    let location = useLocation();
    let value = useContext(AuthCxt);
    let userId = value.user.userId;
    let ownId = userId;

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let highlight = formData.get('highlight');
        let imgUrl = formData.get('imgUrl');
        let gray = formData.get('gray');
        let price = formData.get('price');

        let data = { title, highlight, imgUrl, gray, price, ownId };

        if(location.pathname == '/demo/places/place7a'){
            antarticaService.create(data)
            .then(history.push('/places/place7a'))
        }else if(location.pathname == '/demo/places/place6a'){
            australiaService.create(data)
            .then(history.push('/places/place6a'))
        }else if(location.pathname == '/demo/places/place5a'){
            africaService.create(data)
            .then(history.push('/places/place5a'))
        }else if(location.pathname == '/demo/places/place4a'){
            asiaService.create(data)
            .then(history.push('/places/place4a'))
        }else if(location.pathname == '/demo/places/place3a'){
            placeService.create(data,'/places/place3a')
            .then(history.push('/places/place3a'))
        }else if(location.pathname == '/demo/places/place2a'){
            soutAmericaService.create(data)
            .then(history.push('/places/place2a'))
        }else if(location.pathname == '/demo/places/place1a'){
            northAmericaService.create(data)
            .then(history.push('/places/place1a'))
        }

    }

    return (
        <Typography className='dm-com'>
            <Container>
                <div className="wrapper fadeInDown">
                    <h1 >Create Place</h1>
                    <form onSubmit={onSubmit} method='post'>
                        <input className="fadeIn firsth" placeholder='title' type='text' name='title' />
                        <input className="fadeIn second" placeholder='highlight' type='text' name='highlight' />
                        <input className="fadeIn third" placeholder='imgUrl' type='text' name='imgUrl' />
                        <input className="fadeIn fourth" placeholder='price' type='text' name='price' />
                        <textarea className="form-control" placeholder='Description' type='text' name='gray' rows="5" ></textarea>
                        <th />
                        <input type='submit' className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase" />
                        {/* <Button size='large'></Button> */}
                    </form>
                </div>
            </Container>
        </Typography>

    );
};

function myStyles() {
    Typography: {

    }
}

export default Demo;