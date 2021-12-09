
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import FirstPlace from './ContainerPlaces/First';
import FourtPlace from './ContainerPlaces/Fourth';
import SecondPlace from './ContainerPlaces/Second';
import ThirdPlace from './ContainerPlaces/Third';
import FifthPlace from './ContainerPlaces/Fifth';
import SixthPlace from './ContainerPlaces/SixthPlace';
import SeventhPlace from './ContainerPlaces/SeventhPlace';


import PlacesNavigation from './ContainerPlaces/PlacesNavigation';

const Places = () => {

    const { path } = useRouteMatch();
   
    return (
      <div className="tm-container-outer" id="tm-section-3">
          <PlacesNavigation />
            <div><h3 className="tm-recommended-title">Find Your Place</h3></div>
          <div className="tab-content clearfix">
            <Switch>
            <Route path={`${path}/place1a`} component={FirstPlace} />
            <Route path={`${path}/place2a`} component={SecondPlace} />
            <Route path={`${path}/place3a`} component={ThirdPlace} />
            <Route path={`${path}/place4a`} component={FourtPlace} />
            <Route path={`${path}/place5a`} component={FifthPlace} />
            <Route path={`${path}/place6a`} component={SixthPlace} />
            <Route path={`${path}/place7a`} component={SeventhPlace} />
            </Switch>
          </div>
        </div>
    );
};

export default Places;