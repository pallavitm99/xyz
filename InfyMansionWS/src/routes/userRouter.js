const express = require( 'express' );
// const router = require('router');
const userService = require('../service/user');
var bodyParser = require('body-parser');
const Property = require('../model/property');
const router = express.Router();


router.use( bodyParser.urlencoded( {extended: false} ) );
router.use( bodyParser.json() );


//To login

router.post('/login', (req,res,next) =>{
    let emailId = req.body.emailId;
    let password = req.body.password;
    // console.log(emailId);
    // console.log(password);

    userService.checkUser(emailId, password).then(result =>  {
        res.json(result);
    }).catch(err => next(err));

} )

// To update profile    

router.put( '/update_profile/:userId', ( req,res,next )=>{
    let name = req.body.name;
    let contactNo = req.body.contactNo;

   userService.update_p( name,contactNo,req.params.userId ).then( result =>{
       res.json( result );
   } ).catch( err => next( err ) );
} )

// To search the property location

router.get( '/search' , ( req,res,next )=>{
    userService.search().then( result =>{
        res.json( result );
    } ).catch( err => next( err ) );
} )

// To register the data into the database

router.post('/register', function(req, res, next){
    // console.log(req.body)
    // res.send("In router")
     let userObj = req.body;
    //  console.log(userObj)
    userService.addDetails(userObj).then(result =>{
        res.json(result);

    } ).catch( err=>next( err ) );
} )

// To buy a component

router.get( '/buy' , ( req,res,next )=>{
    userService.showProperty().then( result=>{
        res.json( result )
    } ).catch( err=>next( err ) )
} )

// To view a property

router.get( '/view/:propertyId', ( req,res,next )=>{
    userService.viewProperty( req.params.propertyId ).then( result => {
        res.json( result )
    } ).catch( err =>next( err ) )
} )

// To delete when admin clicks

router.delete( '/delete/:userId',( req,res,next )=>{
    let userId = req.params.userId;
    userService.deleteUser( userId ).then( result =>{
        res.json( {"message": result + "UserId is deleted"} )
    } ).catch( err=>next( err ) )
} )

// TO get all users

router.get( '/get',( req,res,next )=>{
    userService.getAllUsers().then( users =>{
        res.json( users )
    } ).catch( err => next( err ) )
} )


//properties table delete
router.delete( '/delete/:userId', ( req,res,next )=>{
    let userId  = req.params.userId;
    userService.deleteUser_p( userId ).then( result =>{
        res.json( {"message": result + " user is deleted"} )

    } ) .catch( err => next( err ) )
} )

// For Profile
router.get( '/profile/:userId', ( req,res,next )=>{
    let userId = req.params.userId;
    userService.profile( userId ).then( result =>{
        res.json( result )
    } ).catch( err => next( err ) )
} )

// To redirect to sell component

router.post( '/sell/:userID',( req,res,next ) =>{
    let userId = req.params.userId;
    userService.sell( userId ).then( result =>{
        res.json( result )
    } ).catch( err => next( err ) )
} )

// to get buyers

router.get( '/buyers', ( req,res,next )=>{
    userService.buyersget().then( result=>{
        res.json( result )
    } ).catch( err =>next( err ) )
} )

// TO get sellers

router.get( '/seller' ,( req,res,next )=>{
    userService.sellerget().then( result =>{
        res.json( result )
    } ).catch( err => next( err ) )
} )

// To add wishlist
router.get( '/update/:userId/"propertyId/:state', ( req,res,next )=>{
    let userId = req.params.userId;
    let propertyId = req.params.propertyId;
    let status  = req.params.state; 
    userService.addwish( userId,propertyId,status ).then( result=>{
        res.json( result )
    } ).catch( err=> next( err ) )
} )

// To get wishlist

router.get( '/wishlist/:userId', ( req,res,next )=>{
    let userId = req.params.userId;
    return userService.getWishlist( userId ).then( result =>{
        res.json( result )
    } ).catch( err => next( err ) )
} )

// To add seller to roldb

router.get( '/role/:userId',( req,res,next )=>{
    let userId = req.params.userId;
    return userService.seller_role( userId ).then( result =>{
        res.json( result )
    } ).catch( err => next( err ) )
} )

module.exports = router;