
import { useHistory } from 'react-router-dom';
import * as service from '../Services/data';

function SearchBar() {
    let history = useHistory()


    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let destination = formData.get('destination');

        if (destination === '') {
            return alert('All fields are required!');
        }
        service.getAll()
            .then(result => result.filter(x => x.name.toUpperCase() === destination.toUpperCase()))
            .then(currenSearch => history.push(`/journey/destinations/${currenSearch[0]._id}`))
            .catch(err => alert(err.message))

    };

    return (
        <form onSubmit={onSubmit} action="index.html" method="get" className="tm-search-form tm-section-pad-2">
            <div className="form-row tm-search-form-row">
                <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                    <label for="inputCity">Choose Your Destination</label>
                    <input name="destination" type="text" className="form-control" id="inputCity" placeholder="Type destination..." />
                </div>

                <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                    <label for="btnSubmit">&nbsp;</label>
                    <button type="submit" className="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit">Search</button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;