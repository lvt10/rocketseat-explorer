// import {createServer} from 'node:http'

// const server = createServer ((request, response) => {
//     response.write('hello wolrd')
//     return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify"; 
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()
const database = new DatabaseMemory()
server.post('/videos', (request, reply)=>{
    const body

    database.create({
        title: "video 01",s
        description:"esse é o video 01",
        duration:180,
    })
    return reply.status(201).send()
})

server.get('/videos', ()=>{
    return 'hello rocketseat'
})

server.put('/videos/:id', ()=>{
    return 'hello node.js'
})

server.delete('/videos/:id', ()=>{
    return 'hello node.js'
})
server.listen({
    port:3333,
})