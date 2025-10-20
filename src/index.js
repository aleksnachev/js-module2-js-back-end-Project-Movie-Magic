import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import routes from './routes.js'
import cookieParser from 'cookie-parser'
import authMiddleware from './middlewares/authMiddleware.js'
import pageHelpers from './helpers/pageHelpers.js'
import expressSession from 'express-session'
import { tempDataMiddleware } from './middlewares/tempDataMiddleware.js'

const app = express()

// Setup database
const url = 'mongodb://127.0.0.1:27017'

try{
    await mongoose.connect(url, {
        dbName: 'movie-magic-sept2025'
    })

    console.log('Successfully connected to DB');
    
}catch(err){
    console.error('Cannot connect to DB, ', err.message);
    
}

//Setup handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions:{
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    },
    helpers:{
        ...pageHelpers
    }
}))

app.set('view engine', 'hbs')
app.set('views', 'src/views')

//Setup Middlewares
app.use(express.static('src/public'))
//Parse data
app.use(express.urlencoded())
//Cookie parser
app.use(cookieParser())
//Use auth middleware
app.use(authMiddleware)
//Express session
app.use(expressSession({
    secret: 'fsdsfagfkdsagnrdnvuioreiqvopot439480u430u3095r834930fj2ju4f',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}))

// Add tempData middleware
app.use(tempDataMiddleware)
//Routes
app.use(routes)

//Start server
app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'))