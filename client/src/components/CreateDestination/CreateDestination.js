import * as createDestination from '../Services/data';

const CreateDestination = ({
    history
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imgOne = formData.get('imgOne');
        let imgTwo = formData.get('imgTwo');
        let imgThree = formData.get('imgThree');

        const data = { name, description, imgOne, imgTwo, imgThree }

        createDestination.create(data)
        .then(history.push('/destination'))
    };

    return (
        <div className="tm-container-outer" id="tm-section-2">
                {/* <div id="google-map"></div> */}
                <div className="tm-slideshow">
                <img src="img/tm-img-08.jpg" alt="Image" />
                {/* <img src="img/tm-img-02.jpg" alt="Image" />
                <img src="img/tm-img-03.jpg" alt="Image" />     */}
            </div>
                <form onSubmit={handleSubmit} action="index.html" method="POST" className="tm-contact-form">
                    {/* <div className="form-group tm-name-container">
                    </div>
                    <div className="form-group tm-email-container">
                    </div> */}

                    <div className="form-group">
                    <input type="text" id="contact_name" name="name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group">
                    <textarea id="contact_message" name="description" className="form-control" rows="3" placeholder="Description" required></textarea>
                    </div>
                     {/* <div className="form-group">
                        <textarea id="contact_message" name="contact_message" className="form-control" rows="5" placeholder="Message" required></textarea>
                    </div> */}
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