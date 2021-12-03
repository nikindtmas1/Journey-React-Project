const express = require('express');
const router = express.Router();

const southAmericaService = require('../services/southAmericaService');
// First place container
router.get('/', async (req, res) => {

   let places = await southAmericaService.getAll();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await southAmericaService.getOne(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await southAmericaService.createGame({...req.body});
  res.json({ok: true});

});

router.put('/:id', async (req, res) => {
  
   await southAmericaService.update(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
 
  await southAmericaService.deleteSouthAmerica(req.params.id);

  res.json({ok: true});
});

module.exports = router;