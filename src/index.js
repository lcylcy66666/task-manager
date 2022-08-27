const express = require("express")
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next)=>{
//     if(req.method === 'GET'){
//         res.send('Get request are disabled!')
//     }else{
//         next()
//     }
// })

// app.use((req, res, next) =>{
//     res.status(503).send('Site is currently down. Check back soon!')
// })
//Use express.Router() in routers file
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
