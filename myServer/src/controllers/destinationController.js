const express = require('express');
const router = express.Router();

const gameService = require('../services/destinationServices');

// router.get('/', (req, res) => {
//     res.json({text: 'It is working!'})
// });

router.get('/', async (req, res) => {
    

    let games = await gameService.getAll()
    res.json(games);
  
});

// router.get('/details/:id', async (req, res) => {

   
//     try {
//         let result = await gameService.getOne(req.params.id);
        
//         res.json(result);

//     } catch (error) {
//         console.log(error);
//     }
// });

router.get('/:id', async (req, res) => {

   let result = await gameService.getOne(req.params.id);

   res.json(result);
});

router.post('/', async (req, res) => {
    
   await gameService.createGame({...req.body});
   res.json({ok: true})

});

router.put('/:id', async (req, res) => {
  
    await gameService.update(req.params.id, req.body);

    res.json({ok: true});
});


router.delete('/:id', async (req, res) => {
    console.log('Delete');
   await gameService.deleteDestination(req.params.id);

   res.json({ok: true});
});

module.exports = router;