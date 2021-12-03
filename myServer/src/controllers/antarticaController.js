const express = require('express');
const router = express.Router();

const antarticaService = require('../services/antarticaService');
// First place container
router.get('/', async (req, res) => {

   let places = await antarticaService.getAll();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await antarticaService.getOne(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await antarticaService.createGame({...req.body});
  res.json({ok: true});

});

router.put('/:id', async (req, res) => {
  
   await antarticaService.update(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
 
  await antarticaService.deleteAntarticaPlace(req.params.id);

  res.json({ok: true});
});

module.exports = router;