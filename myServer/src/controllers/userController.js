
const router = require('express').Router();
const services = require('../services/userService');

router.post('/register', async (req, res) => {
    let { username, password } = req.body;

    try {
        let user = await services.register({username, password});
        let { accessToken, refreshToken } = await services.login({username, password})
       res.json({
           _id: user._id,
           username: user.username,
           accessToken,
           refreshToken
       })
    } catch (error) {
        res.json({type: 'error',
        message: error.message
    })
        
    }
  
    // try {

    //    let user = await services.register({username, password});
    //    let { accessToken, refreshToken } = await userService.login({ email, password });

    //    res.json({
    //        _id: user._id,
    //        username: user.username,
    //        accessToken,
    //        refreshToken,
    //    })
        
    // } catch (error) {
    //     next(error);
    // }
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    let { user, accessToken, refreshToken } = await services.login({ username, password });

    res.json({
        _id: user._id,
        username: user.username,
        accessToken,
        refreshToken,
    });
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

router.post('/refresh', async (req, res) => {
    console.log(req.body);
    let refreshToken = req.body.refreshToken;

    let { accessToken, refreshToken: newRefreshToken } = await services.refresh(refreshToken);

    res.json({
        accessToken,
        refreshToken: newRefreshToken,
    });
});

module.exports = router;