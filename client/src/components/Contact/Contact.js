import { useContext } from 'react';
import * as services from '../Services/contactData';
import { useHistory } from 'react-router-dom';
import AuthCxt from '../../contexts/AuthCxt';

const Contact = () => {

    let history = useHistory();
    let value = useContext(AuthCxt);
    let userId = value.user.userId;

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name').trim();
        let email = formData.get('email').trim();
        let subject = formData.get('subject').trim();
        let message = formData.get('message').trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            return alert('All fields are required!');
        }

        let data = { name, email, subject, message, userId };

        services.create(data)
            .then(history.push('/home'))
            .catch(err => alert(err.message))
    };
    return (
        <>
            <div className="tm-container-outer tm-position-relative" id="tm-section-4">
                <div className="tm-slideshow">
                    <img src="/img/tm-img-13.jpg" alt="" />

                    <form onSubmit={onSubmit} action="index.html" method="post" className="tm-contact-form">

                        <div className="form-group">
                            <input type="text" id="contact_subject" name="name" className="form-control" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="contact_subject" name="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="contact_subject" name="subject" className="form-control" placeholder="Subject" required />
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