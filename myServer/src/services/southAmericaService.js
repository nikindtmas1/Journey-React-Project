const SouthAmericaPlace = require('../models/southAmericaModel');


const getAll = () => SouthAmericaPlace.find();

const getOne = (id) => SouthAmericaPlace.findById(id);

const createGame = (data) => SouthAmericaPlace.create(data);

const update = (id, data) => SouthAmericaPlace.findByIdAndUpdate(id, data);
 
const getOwn = (userId) => SouthAmericaPlace.find({_ownerId: userId});

const deleteSouthAmerica = (id) => SouthAmericaPlace.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteSouthAmerica
}