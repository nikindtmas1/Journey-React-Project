const express = require('express');
const router = express.Router();

const australiaService = require('../services/australiaService');
// First place container
router.get('/', async (req, res) => {

   let places = await australiaService.getAll();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await australiaService.getOne(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await australiaService.createGame({...req.body});
  res.json({ok: true});

});

router.put('/:id', async (req, res) => {
  
   await australiaService.update(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
 
  await australiaService.deleteAustraliaPlace(req.params.id);

  res.json({ok: true});
});

module.exports = router;