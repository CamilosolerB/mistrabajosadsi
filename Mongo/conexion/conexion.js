const mongoose=require('mongoose');
const user='root';
const password='JVmORTctFlNvF0rX';
const database='Banco';
const uri=`mongodb+srv://${user}:${password}@cluster0.dbwnz.mongodb.net/${database}?retryWrites=true&w=majority`

module.exports=()=>mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});