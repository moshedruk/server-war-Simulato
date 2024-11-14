import express from 'express'
import 'dotenv/config'
// import routerUser from './routes/userRouter'
// import routerCandidate from './routes/candidateRouter'
// import { connectToMongo } from './config/DB'
import cors from 'cors'
// import routerVote from './routes/votesRouter'
import http from 'http'
import { Server } from 'socket.io'
import routerOrganiztions from './src/router/organizition'
import { connectToMongo } from './src/config/connectDB'
import routerUser from './src/router/user'
import { changeinventory } from './src/controllers/missilesController'
import routermissiles from './src/router/display_missiles'
import { handleSocketConnection } from './src/socket/io';
import routerevent from './src/router/evenr'

const PORT = process.env.PORT || 3000
const app = express()
export const server = http.createServer(app)
export  const io = new Server(server, {
    cors: {
        origin: '*',
        methods: '*'
       },
});

io.on("connection", handleSocketConnection)
app.use(express.json())
app.use(cors())
connectToMongo()



app.use('/api/Organiztions',routerOrganiztions)
app.use('/api/users', routerUser)
app.use('/api/missiles',routermissiles)
app.use('/api/event',routerevent)

// app.use('/api/candidates', routerCandidate)
// app.use('/api/vote', routerVote)

server.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))