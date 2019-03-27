/**
* Cargamos el modulo http de node y se asigna a la constante http
**/
const http = require('http');
/**
* creamos el servidor que regresa un JSON string
**/
const server = http.createServer((req, res) =>{
  if (req.url === "/"){
    var time = new Date();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.end(JSON.stringify(time));
  }
});
/**
* el servidor estará en el puerto 8080
**/
server.listen(8080);
