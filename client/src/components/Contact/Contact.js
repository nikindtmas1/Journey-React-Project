
const Contact = () => {
    return (
        <>
        <div className="tm-container-outer tm-position-relative" id="tm-section-4">
                <div className="tm-slideshow">
                <img src="/img/tm-img-09.jpg" alt="Image" />
                {/* <img src="img/tm-img-02.jpg" alt="Image" />
                <img src="img/tm-img-03.jpg" alt="Image" />     */}
               
               
                <form action="index.html" method="post" className="tm-contact-form">
                    <div className="form-group">
                        <input type="text" id="contact_subject" className="form-control" value="contact us"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="contact_name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="contact_email" className="form-control" placeholder="Email"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject"  required/>
                    </div>
                    <div className="form-group">
                        <textarea id="contact_message" name="contact_message" className="form-control" rows="6" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Send Message Now</button>
                </form>

                </div>
            </div>
            </>
    );
};

export default Contact;