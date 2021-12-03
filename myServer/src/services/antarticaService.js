const AntarticaPlace = require('../models/antarticaModel');


const getAll = () => AntarticaPlace.find();

const getOne = (id) => AntarticaPlace.findById(id);

const createGame = (data) => AntarticaPlace.create(data);

const update = (id, data) => AntarticaPlace.findByIdAndUpdate(id, data);
 
const getOwn = (userId) => AntarticaPlace.find({_ownerId: userId});

const deleteAntarticaPlace = (id) => AntarticaPlace.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteAntarticaPlace
}