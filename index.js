const fs = require('fs');


fs.readFile('miauto.json', 'utf8', (error, data)=>{
let miauto = JSON.parse(data);
console.log('mi auto es ' + miauto.modelo);
})