import express from 'express'
import path from "path";
import {requestTime,logger} from './middlewares.js'
const __dirname = path.resolve()
const app = express()
const PORT = 8080

app.set('view engine','ejs')
app.set('views', path.resolve(__dirname,'ejs'))
console.log(app.get('view engine'))

app.use(express.static(path.resolve(__dirname,'static')))
app.use(express.static('public'))



app.get('/',(req, res) => {
    res.render('index', {title:'Main Page'})
})

app.get('/features',(req, res) => {
    res.render('features', {title:'Features Page'})
})

app.use(requestTime)
app.use(logger)

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`)
})
