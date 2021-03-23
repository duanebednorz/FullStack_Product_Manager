const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itemsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('You are connected fool!'))
    .catch(err => console.log("Something went wrong, you ain't connected!", err));