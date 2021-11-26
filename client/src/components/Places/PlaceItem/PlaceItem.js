

const PlaceItem = ({
    place
}) => {

  

    return (
        <div className="tm-recommended-place">
            <img src={place.imgUrl} alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">{place.title}</h3>
              <p className="tm-text-highlight">{place.highlight}</p>
              <p className="tm-text-gray">{place.gray}</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">{place.price}</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>
    );
};

export default PlaceItem;