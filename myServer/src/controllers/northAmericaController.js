const express = require('express');
const router = express.Router();

const northAmericaService = require('../services/northAmericaService');
// First place container
router.get('/', async (req, res) => {

   let places = await northAmericaService.getAll();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await northAmericaService.getOne(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await northAmericaService.createGame({...req.body});
  res.json({ok: true});

});

router.put('/:id', async (req, res) => {
  
   await northAmericaService.update(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
 
  await northAmericaService.deleteNorthAmerica(req.params.id);

  res.json({ok: true});
});

module.exports = router;