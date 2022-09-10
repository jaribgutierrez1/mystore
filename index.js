const express= require('express')
const app = express()
const port =3000;

//Crear  un endpoint en el metodo GET
app.get('/', function(req, res){
    res.send('Hola mundo');
})
app.listen (port, ()=>{
    console.log('Levantando server en el puerto ${port}')
})