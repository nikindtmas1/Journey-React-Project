import { Route, Link, Switch } from 'react-router-dom';
import FirstPlace from './ContainerPlaces/First';
import FourtPlace from './ContainerPlaces/Fourth';
import PlacesNavigation from './ContainerPlaces/PlacesNavigation';
import Demo from './ContainerPlaces/Demo';

const Places = ({
  match
}) => {

//  const onClickHandler = (e) => {
//    e.preventDefault();
//  }

 
    return (
      <div className="tm-container-outer" id="tm-section-3">
          <PlacesNavigation />
          <div className="tab-content clearfix">

            <Route path="/places/:id" component={Demo} />
          
           {/* <FourtPlace /> */}
          </div>
        </div>
    );
};

export default Places;