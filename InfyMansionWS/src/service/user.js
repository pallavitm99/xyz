const brcypt=require('bcryptjs')
const Validator = require('../utilities/validator');
let infyMansionService={}
    Validator.validateEmail(emailId)
    Validator.validatePassword(password)

    return userdb.findUser(emailId).then(userData=>{
        if(userData==null){
            let err=new Error("user not available!! Please register");
            
infyMansionService.checkUser=( emailId,password )=>{
    Validator.validateEmail( emailId )
    Validator.validatePassword( password )
    return userdb.findUser( emailId ).then( userData=>{
        if( userData==null ){
            let err=new Error( "user not available!! Please register" );

            err.status=404;
            throw err;
        }
        else{
            if(userData.emailId==emailId){
                // return brcypt.compare(password,userData.password).then((res)=>{
                    // if(res){
                        return userData;
                    // }
                    // else{
                    //     let err=new Error("Password is Incorrect");
                    //     err.status=404;
                    //     throw err;
                    
                // })
            }
            else{
                let err=new Error( "Autentication failed" );
                err.status=404;
                throw err;
            }
        }
    } )
}

infyMansionService.addDetails=( UserObj )=>{
    return userdb.findUser( UserObj.email,UserObj.contact ).then( object=>{
        {
            if( object !=null ){
                let err =new Error( "user already exists with this emailId and contact Number" );
                err.status=404;
                throw err;
            }
            else{
                // Validator.validateEmail(UserObj.email)
                // Validator.validateName(UserObj.name)
                // Validator.validateContactNo(UserObj.contact)
                // Validator.validatePassword(UserObj.password)
                brcypt.genSalt( 10,function ( err,salt ){
                    brcypt.hash( UserObj.password,salt,function ( err,hash ){
                        UserObj.password=hash
                    } );
                } );
                return userdb.generateId().then( ( data )=>{
                    UserObj.userId=data;
                    return userdb.addUser( UserObj ).then( ( data )=>{
                        if( data ){
                            return data;
                        }
                        else{
                            let err=new Error( "Autentication failed!" );
                            err.status=404
                            throw err;
                        }
                    } )
                } )
                
            }
        }
    } )
}
infyMansionService.search=()=>{
    return userdb.searchLocation().then( object=>{
        {
            if( object==null ){
                let err=new Error( "no location exists" );
                err.status=404;
                throw err;
            }
            else{
                return object
            }
        }
    } )
}
infyMansionService.showProperty=()=>{
    return userdb.findProperty().then( result=>{
        if( result == null ){
            let err = new Error( "No property" );
            err.status=204;
            throw err;
        }
        else{
            return result;
        }
    } )
}

infyMansionService.viewProperty = (propertyId) => {
    return userdb.viewProperty(propertyId).then(result => {
        if (result == null) {
            let err = new Error("No property");
            err.status = 204;
            throw err;
        } else {
            return result;
        }
    })
}


infyMansionService.deleteUser=(userId)=>{
    return userdb.deleteUser(userId).then(removedUser=>{
        if(removedUser){
        return removedUser
        }
        else{
            let err=new Error( "User data not deleted" );
            err.status=502;
            throw err;
        }
    
    } )
}

infyMansionService.getallUsers=()=>{
    return userdb.getallUsers().then( dataUsers=>{
        if( dataUsers !=null ){
            return dataUsers
        }
        else{
            let err=new Error( "No user data available" )
            err.status=404;
            throw err;
        }
    } )
}
infyMansionService.deleteUserp=( propertyId )=>{
    return userdb.deleteUserp( propertyId ).then( removedUser=>{
        if( removedUser ){
            return removedUser
        }
        else{
            let err=new Error( "Unable to delete property " )
            err.status=502;
            throw err
        }
    } )
}
infyMansionService.profile=( userId )=>{
    return userdb.profile( userId ).then( data=>{
        if( data ){
            return data;
        }
        else{
            let err=new Error( "You have no properties" )
            err.status=404;
            throw err
        }
    } )
}
infyMansionService.addproperty=( propertyObj,userId )=>{
    return userdb.generatePropertyId().then( data=>{
        propertyObj.propertyId=data;
        let img= data.substr(4,1)
        propertyObj.imageUrls="../../../assets/tiny-house-" + img + ".jpg"
        propertyObj.sellerId=userId;
        return userdb.addpropertyDetails( propertyObj ).then( ( model )=>{
            if( model ){
                return userdb.updateRoleSellerSchema( userId ).then( data2=>{
                    if( data2 ){
                        return model 
                    }
                    else{
                        let err=new  Error( "Soory!this property really exists" );
                        err.status=404;
                        throw err;
                    }
                } )
            }
            else{
                let err=new Error( "Unable to add property!Try again" );
                err.status=502;
                throw err;
            }
        } )
    } )
}


infyMansionService.buyersget=()=>{
    return userdb.buyersget().then( buyers=>{
        if( buyers ){
            return buyers
        }
        else{
            let err=new Error( "No buyers available" );
            err.status=404;
            throw err;
        }
    } )
}
infyMansionService.sellerget=()=>{
    return userdb.sellerget().then( sellers=>{
        if( sellers ){
            return sellers
        }
        else{
            let err= new Error( "No sellers available" );
            err.status=404;
            throw err;
        }
    } )
}
infyMansionService.getWishlist=( userId )=>{
    return userdb.getWishlist( userId ).then( wishlist=>{
        if( wishlist!=null ){
            return wishlist
        }
        else{
            let err=new Error( "You have no items wishlisted" );
            err.status=404;
            throw err;

        }
    } )
}
infyMansionService.addWish=( uid,pid,status )=>{
    return userdb.addWish( uid,pid,status ).then( added=>{
        if( added ){
            return added
        }
        else{
            let err=new Error( "Couldnt add to wishlist" );
            err.status=502;
            throw err;
        }
    } )
}
infyMansionService.updateP=( name,contactNo,userId )=>{
    return userdb.updateP( name,contactNo,userId ).then( updated=>{
        if( updated ){
            return updated
        }
        else{
            let err=new Error( "Couldnt not update profile" );
            err.status=502;
            throw err;
        }
    } )
}
infyMansionService.sellerRole=( userId )=>{
    return userdb.sellerRole( userId ).then( added=>{
        if( added ){
            return added
        }
        else{
            let err=new Error( "Could not update seller details" );
            err.status=502;
            throw err;
        }
    } )
}

module.exports=infyMansionService



