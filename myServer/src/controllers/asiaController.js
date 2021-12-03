const express = require('express');
const router = express.Router();

const asiaService = require('../services/asiaService');
// First place container
router.get('/', async (req, res) => {

   let places = await asiaService.getAll();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await asiaService.getOne(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await asiaService.createGame({...req.body});
  res.json({ok: true});

});

router.put('/:id', async (req, res) => {
  
   await asiaService.update(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
 
  await asiaService.deleteAsiaPlace(req.params.id);

  res.json({ok: true});
});

module.exports = router;