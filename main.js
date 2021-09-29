const http = require('http');
const url = require('url');
const fs = require('fs');

http
.createServer((req, res)=>{
    const {name, lastname, email, password} = url.parse(req.url, true).query

    if(req.url.startsWith('/newuser')){
        let user = {
            name,
            lastname,
            email,
            password
        };
        fs.writeFileSync('user.json', JSON.stringify(user));
        res.end('Usuario creado');
    }
}).listen(3000, ()=>{
    console.log('Servidor ON');
})
