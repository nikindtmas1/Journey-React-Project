
const Contact = () => {
    return (
        <div className="tm-container-outer tm-position-relative" id="tm-section-4">
                <div id="google-map"></div>
                <form action="index.html" method="post" className="tm-contact-form">
                    <div className="form-group tm-name-container">
                        <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group tm-email-container">
                        <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject"  required/>
                    </div>
                    <div className="form-group">
                        <textarea id="contact_message" name="contact_message" className="form-control" rows="9" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Send Message Now</button>
                </form>
            </div>
    );
};

export default Contact;