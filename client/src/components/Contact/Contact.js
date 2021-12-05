import * as services from '../Services/contactData';
import {useHistory } from 'react-router-dom';

const Contact = () => {

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name').trim();
        let email = formData.get('email').trim();
        let subject = formData.get('subject').trim();
        let message = formData.get('message').trim();

        let data = { name, email, subject, message };

        services.create(data)
        .then(history.push('/home'));

    };
    return (
        <>
        <div className="tm-container-outer tm-position-relative" id="tm-section-4">
                <div className="tm-slideshow">
                <img src="/img/tm-img-13.jpg" alt="Image" />
                {/* <img src="img/tm-img-02.jpg" alt="Image" />
                <img src="img/tm-img-03.jpg" alt="Image" />     */}
               
               
                <form onSubmit={onSubmit} action="index.html" method="post" className="tm-contact-form">
                    {/* <div className="form-group">
                        <input type="text" id="contact_subject" className="form-control" value="contact us"  required/>
                    </div> */}
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="name" className="form-control" placeholder="Name"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="email" className="form-control" placeholder="Email"  required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="contact_subject" name="subject" className="form-control" placeholder="Subject"  required/>
                    </div>
                    <div className="form-group">
                        <textarea id="contact_message" name="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase">Send Message Now</button>
                    </div>
                </form>

                </div>
            </div>
            </>
    );
};

export default Contact;