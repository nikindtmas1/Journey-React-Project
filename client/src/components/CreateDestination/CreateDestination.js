import { useContext } from 'react';
import * as createDestination from '../Services/data';
import { useHistory } from 'react-router-dom';

import AuthCxt from '../../contexts/AuthCxt';

const CreateDestination = ({

}) => {
    let history = useHistory();
    const value = useContext(AuthCxt);
    let userId = value.user.userId;

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imgOne = formData.get('imgOne');
        let imgTwo = formData.get('imgTwo');
        let imgThree = formData.get('imgThree');
        let likes = 0;
        let ownId = userId;

        if( name == '' || description == '' || imgOne == '' || imgTwo == '' || imgThree == ''){
            return alert('All fields are required!');
        }

        const data = { name, description, imgOne, imgTwo, imgThree, likes, ownId }

        createDestination.create(data)
        .then(history.push('/destination'))
    };

    return (
        <div className="tm-container-outer" id="tm-section-2">
                <div className="tm-slideshow">
                <img src="/img/tm-img-16.jpg" alt="Image" />
                {/* <img src="img/tm-img-02.jpg" alt="Image" />
                <img src="img/tm-img-03.jpg" alt="Image" />     */}
                </div>
            
                <form onSubmit={handleSubmit} action="index.html" method="POST" className="tm-contact-form">
                    {/* <div className="form-group">
                        <input type="text" id="contact_name" className="form-control" value="create destination"  required/>
                    </div> */}
                    <div className="form-group">
                    <input type="text" id="contact_name" name="name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group">
                    <textarea id="contact_message" name="description" className="form-control" rows="5" placeholder="Description" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imgOne" className="form-control" placeholder="Image One"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imgTwo" className="form-control" placeholder="Image Two"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imgThree" className="form-control" placeholder="Image Three"  required/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Add Destination Now</button>
                </form>
            </div>
    );
};

export default CreateDestination;