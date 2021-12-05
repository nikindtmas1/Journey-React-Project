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

        if( title == '' || highlight == '' || imgUrl == '' || gray == '' || price == ''){
                throw new Error('All fields is required')
           // return (history.push('/error'))
        }

        let data = { title, highlight, imgUrl, gray, price, ownId };

        if (location.pathname == '/demo/places/place7a') {
            antarticaService.create(data)
                .then(history.push('/places/place7a'))
        } else if (location.pathname == '/demo/places/place6a') {
            australiaService.create(data)
                .then(history.push('/places/place6a'))
        } else if (location.pathname == '/demo/places/place5a') {
            africaService.create(data)
                .then(history.push('/places/place5a'))
        } else if (location.pathname == '/demo/places/place4a') {
            asiaService.create(data)
                .then(history.push('/places/place4a'))
        } else if (location.pathname == '/demo/places/place3a') {
            placeService.create(data, '/places/place3a')
                .then(history.push('/places/place3a'))
        } else if (location.pathname == '/demo/places/place2a') {
            soutAmericaService.create(data)
                .then(history.push('/places/place2a'))
        } else if (location.pathname == '/demo/places/place1a') {
            northAmericaService.create(data)
                .then(history.push('/places/place1a'))
        }

    }

    return (
        <div className="tm-container-outer tm-position-relative" id="tm-section-4">
            <div className="tm-slideshow">
                <img src="/img/tm-img-14.jpg" alt="Image" />
                <form onSubmit={onSubmit} method='post' className="tm-contact-form">
                    <input className="fadeIn firsth" placeholder='title' type='text' name='title' />
                    <input className="fadeIn second" placeholder='highlight' type='text' name='highlight' />
                    <input className="fadeIn third" placeholder='imgUrl' type='text' name='imgUrl' />
                    <input className="fadeIn fourth" placeholder='price' type='text' name='price' />
                    <textarea className="form-control" placeholder='Description' type='text' name='gray' rows="5" ></textarea>
                    <th />
                    {/* <input type='submit' value="Create Place" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase" /> */}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Create Place</button>
                    </div>
                </form>
            </div>

        </div>


    );
};

function myStyles() {
    Typography: {

    }
}

export default Demo;