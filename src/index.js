const express = require('express');

const { Client } =require('pg');
const redis =require('redis');
 


const port = 4004;
const app =express();

const db_user='root';
const db_password='example';


const uri ='postgres://root:example@postgres:5432';



//mongoose.connect(uri)
//.then(() => console.log('connected to db ...'))
//.catch((err) => console.log('failed to connect to db :',err));

const client = new Client({
    connectionString:uri
})

client.connect().then(() => console.log('connected to db ...')).catch((err) => console.log('failed to connect to db :',err));

app.get('/', (req, res) => res.send('<h1>hello hehe pro! hihi</h1>'));

app.listen(port ,() => console.log('app is up and running on port: ${port}'));