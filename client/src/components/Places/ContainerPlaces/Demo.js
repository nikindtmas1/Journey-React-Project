import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import * as placeService from '../../Services/placesData';
import * as asiaService from '../../Services/asiasData';
import * as africaService from '../../Services/africaData';
import { Button } from '@mui/material';

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography'
import { fontSize } from '@mui/system';


const Demo = ({
    
}) => {
    let history = useHistory();
    let location = useLocation();
   

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let highlight = formData.get('highlight');
        let imgUrl = formData.get('imgUrl');
        let gray = formData.get('gray');
        let price = formData.get('price');

        let data = { title, highlight, imgUrl, gray, price };

        if(location.pathname == '/demo/places/place5a'){
            africaService.create(data)
            .then(history.push('/places/place5a'))
        }else if(location.pathname == '/demo/places/place4a'){
            asiaService.create(data)
            .then(history.push('/places/place4a'))
        }else if(location.pathname == '/demo/places/place3a'){
            placeService.create(data,'/places/place3a')
            .then(history.push('/places/place3a'))
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
                        <input placeholder='title' type='text' name='title' />
                        <input placeholder='highlight' type='text' name='highlight' />
                        <input placeholder='imgUrl' type='text' name='imgUrl' />
                        <input placeholder='price' type='text' name='price' />
                        <textarea placeholder='Description' type='text' name='gray' ></textarea>
                        <th />
                        <input type='submit' />
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