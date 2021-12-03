const AustraliaPlace = require('../models/australiaModel');


const getAll = () => AustraliaPlace.find();

const getOne = (id) => AustraliaPlace.findById(id);

const createGame = (data) => AustraliaPlace.create(data);

const update = (id, data) => AustraliaPlace.findByIdAndUpdate(id, data);
 
const getOwn = (userId) => AustraliaPlace.find({_ownerId: userId});

const deleteAustraliaPlace = (id) => AustraliaPlace.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteAustraliaPlace
}