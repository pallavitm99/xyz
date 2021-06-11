const { expect } = require('chai'); // Library to clean and easy syntax
const request = require('supertest'); //library for http agent
const userModel= require('../src/model/userModel')



//generate userId for new User
describe('Generating the userId', async() => {
   
    it( 'checking the Id of type String', async() => {
        let data=await userModel.generateId()
        expect(data).be.a('String');
    })

    it( 'checking the Id not to be NULL', async() => {
        let data=await userModel.generateId()
        expect(data).not.to.equal(null);
    });

    it(' Id should start with U',async()=>{
        let data=await userModel.generateId()
        expect(data[0]).to.equal('U');
    })
 });

 //generate property id for every new property
 describe('Generating the propertyId', async() => {
   
    it( 'checking the Property Id of type String', async() => {
        let data=await userModel.generatePropertyId()
        expect(data).be.a('String');
    })

    it( 'checking the Property Id not to be NULL', async() => {
        let data=await userModel.generatePropertyId()
        expect(data).not.to.equal(null);
    });

    it(' Property Id should start with P',async()=>{
        let data=await userModel.generatePropertyId()
        expect(data[0]).to.equal('P');
    })
 });



//To check whether the user with conatctNo or emailId exist or not
describe('checking user is exsiting or not ', async() => {
    it('checking contact no', async() => {
        let data=await userModel.findUser(8854126574);
        expect(data).to.equal(null);
    });
});
 

//view the selected property
describe('Getting the property details ', async() => {
    it('getting the data with the help of userId', async() => {
        let data=await userModel.viewProperty("P1001")
        expect(data).to.equal(null);
    });

   
});
