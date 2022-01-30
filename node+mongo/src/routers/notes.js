const express = require('express');
const router = express.Router();
const note = require('../models/Note')

router.get('/notes/new-notes',(req, res) => {
    res.render('notes/newnotes')
})

router.post('/notes/newnotes', async (req, res)=>{
    const {title, description} = req.body;
    const errors =[];
    if(!title){
        errors.push({text: 'Escriba un titulo'})
    }
    if(!description){
        errors.push({text: 'Escriba un cuerpo'})
    }
    if(errors.length > 0){
        res.render('notes/newnotes',{
            errors,
            title,
            Contenido
        })
    }
    else{
    const newnotes = new note({title, description});
    await newnotes.save();
    console.log(newnotes)
    res.send('ok')
}
})

router.get('/notes', (req, res)=>{
    res.send("notas para la base de datos")
});
module.exports = router;