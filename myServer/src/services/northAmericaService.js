const NorthAmericaPlace = require('../models/northAmericaModel');


const getAll = () => NorthAmericaPlace.find();

const getOne = (id) => NorthAmericaPlace.findById(id);

const createGame = (data) => NorthAmericaPlace.create(data);

const update = (id, data) => NorthAmericaPlace.findByIdAndUpdate(id, data);
 
const getOwn = (userId) => NorthAmericaPlace.find({_ownerId: userId});

const deleteNorthAmerica = (id) => NorthAmericaPlace.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteNorthAmerica
}