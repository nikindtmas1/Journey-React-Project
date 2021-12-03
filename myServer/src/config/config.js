module.exports = {
    development: {
        PORT: 5000,
        dbUrl: 'mongodb://localhost:27017/journey',
        dbAtlas: 'mongodb+srv://niki:asdasd123123@cluster0.z7c17.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        secret: 'mnogoqkaparola'
    },
    production: {
        PORT: 80
    }
}

