let data = require("./information");
console.log(data);

const cowsay = require ("cowsay");

console.log (cowsay.say({ 
    text 'je suis ${data.name} du campus ${data.campus}',
} ) ) ;
