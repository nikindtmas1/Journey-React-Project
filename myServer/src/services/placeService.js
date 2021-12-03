const Place = require('../models/placeModel');


const getAllPlaces = () => Place.find();

const getOnePlace = (id) => Place.findById(id);

const createPlace = (data) => Place.create(data);

const updatePlace = (id, placeData) => Place.findByIdAndUpdate(id, placeData);
 
const getOwnPlace = (userId) => Place.find({_ownerId: userId});

const deletePlace = (id) => Place.findByIdAndDelete(id);


module.exports = {
 getAllPlaces,
 getOnePlace,
 createPlace,
 updatePlace,
 getOwnPlace,
 deletePlace
}