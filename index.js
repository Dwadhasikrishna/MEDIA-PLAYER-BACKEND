//import json-server library in index.js
const jsonServer = require('json-server')

//create server using json-server library
const mediaPlayerServer = jsonServer.create()

//create path to db.json file 
const router = jsonServer.router('db.json')

//middlewares to convert js to json
const middlewares = jsonServer.defaults()

//connect/use middlewares and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

//setup port for the server

const port = 5000 || process.env.PORT

//To listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at ${port} and ready fetch request`);
})