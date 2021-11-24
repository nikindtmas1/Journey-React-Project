import { Route, Link, Switch } from 'react-router-dom';
import FirstPlace from './ContainerPlaces/First';
import FourtPlace from './ContainerPlaces/Fourth';
import PlacesNavigation from './ContainerPlaces/PlacesNavigation';

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

            {/* <Switch>
              <Route path="/places/1a" component={FirstPlace} />
              <Route path="/places/4a" component={FourtPlace} />

            </Switch> */}
           <FourtPlace />
          </div>
        </div>
    );
};

export default Places;