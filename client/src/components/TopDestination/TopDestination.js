import { useState, useEffect } from 'react';
import DestinationItem from "../DestinationItem/DestinationItem";
import NotDestinations from '../DestinationItem/NotDestinations';

import * as services from '../Services/data';

const Destination = () => {
    const [destinations, setDestination] = useState([]);

    useEffect(() => {
        services.getAll()
            .then((result) => setDestination(result))
            .catch(err => alert(err.message))
    }, []);
    return (
        <div className="tm-container-outer" id="tm-section-2">
            {destinations.length > 0
                ? destinations.map(x => <DestinationItem key={x._id} destination={x} />)
                : <NotDestinations key="0000001" />
            }
        </div>
    );
};

export default Destination;