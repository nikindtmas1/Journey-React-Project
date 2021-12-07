import { useState, useEffect } from 'react';

import * as service from '../Services/data';

const EditDestination = ({
    history,
    match
}) => {
   

    const [currDestination, setCurrDestination] = useState([]);

    useEffect(() => {
        service.getOne(match.params.id)
        .then(result => setCurrDestination(result))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imgOne = formData.get('imgOne');
        let imgTwo = formData.get('imgTwo');
        let imgThree = formData.get('imgThree');

        if( name === '' || description === '' || imgOne === '' || imgTwo === '' || imgThree === ''){
            return alert('All fields are required!');
        }

        const data = { name, description, imgOne, imgTwo, imgThree }

       
        service.edit(match.params.id, data)
        .then(history.push('/destination'))
    };
    return (
        <div className="tm-container-outer" id="tm-section-2">
               
                <div className="tm-slideshow">
                <img src={currDestination.imgOne} alt="" />
               
            </div>
                <form onSubmit={handleSubmit} action="" method="POST" className="tm-contact-form">
                

                    <div className="form-group">
                    <input type="text" id="contact_name" name="name" className="form-control" defaultValue={currDestination.name} placeholder="Name"  required/>
                    </div>
                    <div className="form-group">
                    <textarea id="contact_message" name="description" className="form-control" defaultValue={currDestination.description} rows="3" placeholder="Description" required></textarea>
                    </div>
                     {/* <div className="form-group">
                        <textarea id="contact_message" name="contact_message" className="form-control" rows="5" placeholder="Message" required></textarea>
                    </div> */}
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imgOne" className="form-control" defaultValue={currDestination.imgOne} placeholder="Image One"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imgTwo" className="form-control" defaultValue={currDestination.imgTwo} placeholder="Image Two"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imgThree" className="form-control" defaultValue={currDestination.imgThree} placeholder="Image Three"  required/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Edit Destination Now</button>
                </form>
            </div>
    );
};

export default EditDestination;