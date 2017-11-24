// JavaScript source code
module.exports = {
    db: {
        uri: process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost:27017') + '/bucketlist',
        options: {
            user: '',
            pass: ''
        }
    }
}