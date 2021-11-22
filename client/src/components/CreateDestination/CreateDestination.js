
const CreateDestination = () => {

    return (
        <div className="tm-container-outer" id="tm-section-2">
                {/* <div id="google-map"></div> */}
                <div className="tm-slideshow">
                <img src="img/tm-img-01.jpg" alt="Image" />
                {/* <img src="img/tm-img-02.jpg" alt="Image" />
                <img src="img/tm-img-03.jpg" alt="Image" />     */}
            </div>
                <form action="index.html" method="post" className="tm-contact-form">
                    {/* <div className="form-group tm-name-container">
                    </div>
                    <div className="form-group tm-email-container">
                    </div> */}

                    <div className="form-group">
                    <input type="text" id="contact_name" name="name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group">
                    <input type="email" id="contact_email" name="description" className="form-control" placeholder="Description"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="imageUrl" className="form-control" placeholder="Image"  required/>
                    </div>
                    <div className="form-group">
                        <textarea id="contact_message" name="contact_message" className="form-control" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Add Destination Now</button>
                </form>
            </div>
    );
};

export default CreateDestination;