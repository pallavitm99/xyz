const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const userRouter = require( './routes/userRouter' )
const cors = require( "cors" )
const create = require( './model/setupdb' )

const app = express();
const errorLogger= require( './utilities/errorLogger' )
const requestLogger= require( './utilities/reqLogger' )

app.use( cors() )
app.use( bodyParser.json() );
// to setup the Database
app.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})
app.use(requestLogger)

app.use('/', userRouter)




app.use( errorLogger )
console.log( "Server listening in port 1050" );
app.listen( 1050 );


module.exports = app