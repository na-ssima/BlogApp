const express = require('express')
const app = express()


app.use(express.json())

const logMiddleware = require('./middlewares/middlewar')
const errorMiddleware = require('./middlewares/error')
app.use(logMiddleware);
app.use(errorMiddleware);

const postRouter = require('./routes/postRoutes')
app.use('/posts', postRouter)

app.listen(3000,()=>{
    console.log("Server is running")
})


