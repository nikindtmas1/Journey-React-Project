const express = require('express');
const router = express.Router();

const placeService = require('../services/placeService');
// First place container
// router.get('/', async (req, res) => {

//    let places = await placeService.getAllPlaces();
//    res.json(places);
 
// });

// router.get('/:id', async (req, res) => {

//   let result = await placeService.getOnePlace(req.params.id);

//   res.json(result);
// });

// router.post('/', async (req, res) => {
// console.log(req.body);
//   await placeService.createPlace({...req.body});
//   res.json({ok: true});

// });

// router.put('/place1a/:id', async (req, res) => {
  
//    await placeService.updatePlace(req.params.id, req.body);

//    res.json({ok: true});
// });

// router.delete('/place1a/:id', async (req, res) => {
 
//   await placeService.deletePlace(req.params.id);

//   res.json({ok: true});
// });

// Second place container

// router.get('/place2a', async (req, res) => {

//    let places = await placeService.getAllPlaces();
//    res.json(places);
 
// });

// router.get('/place2a/:id', async (req, res) => {

//   let result = await placeService.getOnePlace(req.params.id);

//   res.json(result);
// });

// router.post('/place2a', async (req, res) => {

//   await placeService.createPlace({...req.body});
//   res.json({ok: true});

// });

// router.put('/place2a/:id', async (req, res) => {
  
//    await placeService.updatePlace(req.params.id, req.body);

//    res.json({ok: true});
// });

// router.delete('/place2a/:id', async (req, res) => {
 
//   await placeService.deletePlace(req.params.id);

//   res.json({ok: true});
// });

// Therd place container
router.get('/place3a', async (req, res) => {

    let places = await placeService.getAllPlaces();
    res.json(places);
  
});

router.get('/place3a/:id', async (req, res) => {

   let result = await placeService.getOnePlace(req.params.id);

   res.json(result);
});

router.post('/place3a', async (req, res) => {

   await placeService.createPlace({...req.body});
   res.json({ok: true});

});

router.put('/place3a/:id', async (req, res) => {
   
    await placeService.updatePlace(req.params.id, req.body);

    res.json({ok: true});
});

router.delete('/place3a/:id', async (req, res) => {
  
   await placeService.deletePlace(req.params.id);

   res.json({ok: true});
});

// Fourth place Asia

// router.get('/place4a', async (req, res) => {

//    let places = await placeService.getAllPlaces();
//    res.json(places);
 
// });

// router.get('/place4a/:id', async (req, res) => {

//   let result = await placeService.getOnePlace(req.params.id);

//   res.json(result);
// });

// router.post('/place4a', async (req, res) => {

//   await placeService.createPlace({...req.body});
//   res.json({ok: true});

// });

// router.put('/place4a/:id', async (req, res) => {
  
//    await placeService.updatePlace(req.params.id, req.body);

//    res.json({ok: true});
// });

// router.delete('/place4a/:id', async (req, res) => {
 
//   await placeService.deletePlace(req.params.id);

//   res.json({ok: true});
// });


module.exports = router;