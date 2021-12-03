const mongoose = require('mongoose');

const { development } = require('../config/config');
//const connectStr = development.dbUrl;
const connectAtlas = development.dbAtlas;

module.exports = (app) => {

    async function main(){

        await mongoose.connect(connectAtlas, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        console.log('Data base connected!');
    }
    main();

}