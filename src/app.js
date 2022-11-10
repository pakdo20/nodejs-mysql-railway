import express from "express";
import {pool} from './db.js'
import {PORT} from './config.js'
const app =express()

app.get('/',async (req,res)=>{
    const [rows]= await pool.query('SELECT * from users')
    res.json(rows)
})

app.get('/ping',async (req,res)=>{
    const [result]= await pool.query(`SELECT "hello world" as RESULT`)
    res.json(result[0])
})

app.get('/create', async(req,res)=>{
    const result= await pool.query('INSERT into users(name) values ("John")')
    res.json(result)
})

app.listen(PORT)
console.log('Server on port', PORT)

//node js
//logging, morgan, winston, pino, xd bunyan, log4js, debug , etc

//npm i nodemon -D
//npm run dev