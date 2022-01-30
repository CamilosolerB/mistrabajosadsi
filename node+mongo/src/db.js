const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notasmongo', {
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useFindAndModify: false
})
    .then(db => console.log("Conectado correctamente"))
    .catch(err => console.error(err));