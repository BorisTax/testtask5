/* Server */
import express from  'express'
import http from 'http'
import path from 'path'
import config from 'config'
import cors from 'cors'
import bodyParser from 'body-parser'
import _debug from 'debug'
import {loginUser, registerUser} from './users'

var debug = _debug('server')
var router = express.Router()

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: config.bodyParserLimit}))
app.use(express.static(path.join(__dirname, '/../../build')))

router.post('/login', async (req, res)=>{
  const user=req.body;
  if(!user.name) user.name="";
  if(!user.password) user.password="";
  const result=await loginUser(user); 
  res.json(result);
})
router.post('/register', async (req, res)=>{
  const user=req.body;
  if(!user.name||!user.password) return res.json({registered:false});
  const result=await registerUser(user); 
  res.json({registered:result});
})

app.use('/', router)

let server = async () => {
  debug('Starting server...')
  let httpServer = http.Server(app)
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/../../build', 'index.html'))
  })
  httpServer.listen(config.port, () => {
    debug(`Server running on ${config.port}.`)
  })
}
server()