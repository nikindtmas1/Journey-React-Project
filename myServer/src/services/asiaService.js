const AsiaPlace = require('../models/asiaModel');


const getAll = () => AsiaPlace.find();

const getOne = (id) => AsiaPlace.findById(id);

const createGame = (data) => AsiaPlace.create(data);

const update = (id, data) => AsiaPlace.findByIdAndUpdate(id, data);
 
const getOwn = (userId) => AsiaPlace.find({_ownerId: userId});

const deleteAsiaPlace = (id) => AsiaPlace.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteAsiaPlace
}