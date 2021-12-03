const express = require('express');
const router = express.Router();

const africaService = require('../services/africaService');
// First place container
router.get('/', async (req, res) => {

   let places = await africaService.getAll();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await africaService.getOne(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await africaService.createGame({...req.body});
  res.json({ok: true});

});

router.put('/:id', async (req, res) => {
  
   await africaService.update(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
 
  await africaService.deleteAfricaPlace(req.params.id);

  res.json({ok: true});
});

module.exports = router;