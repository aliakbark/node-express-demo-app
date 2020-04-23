// Set up mongoose connection
const mongoose = require('mongoose')

const db_url = 'mongodb://127.0.0.1:27017/restaurant_app'

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(db => console.log('Database connected:', db_url))
.catch(err => console.error('connection error:', err));

