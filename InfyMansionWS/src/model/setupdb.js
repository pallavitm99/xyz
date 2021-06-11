
const collection = require( '../utilities/connection' );

const userDb = [
    {
        wishlist: ["P1001"],
        name: "admin",
        emailId: "admin@gmail.com",
        contactNo: 1234567890,
        city: "Mysore",
        area: "Hebbal",
        pincode: 123457,
        password: "$2a$08$1GFkW7SkNI1b4o.kBkDGWOXaPoWd4uYhTDG5rwoLLQJClYhAASJjW",
        userId: "U1001"
    },
    {
        wishlist: ["P1001", "P1002"],
        name: "user",
        emailId: "user@gmail.com",
        contactNo: 9874567890,
        city: "Mysore",
        area: "Hebbal",
        pincode: 123457,
        password: "$2a$08$aCmbCuJcJOjAVbfarqGes.owK1/RpyH07FMCL2I6BP.kzwAgCzDn2",
        userId: "U1002"
    }

]

const roleDb =
{
    registeredUsers: ["U1002"],
    buyers: ["U1002"],
    sellers: ["U1001"]
}

const locationDb = [
    {
        "propertyIds": ["P1001", "P1002"],
        "pincode": 570001,
        "area": "Mandimohalla",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "propertyIds": ["P1002"],
        "pincode": 570001,
        "area": "Krishna Rajendra Circle",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570001,
        "area": "Mysore",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570002,
        "area": "Vani Vilas Mohalla",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570002,
        "area": "Gokulam",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570003,
        "area": "Siddalingapura",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570003,
        "area": "Naganahalli",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570003,
        "area": "Note Mudran Nagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570004,
        "area": "Krishnamurthypuram",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570004,
        "area": "Mysore Fort",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570004,
        "area": "Chamundi Extension",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570004,
        "area": "Krishna Raja Mohalla",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570004,
        "area": "Lakshmipuram",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570005,
        "area": "Mysore Law Courts",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570005,
        "area": "Mysore University",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570006,
        "area": "Manasagangothri",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570006,
        "area": "University Campus",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570007,
        "area": "Rajeeva Nagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570007,
        "area": "Narasimha Raja Mohalla",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "First Stage Ind Suburb",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Gopalapura",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Jaya Prakash Nagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Mysore South",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Ramabai Nagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Srirampura",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Udbur",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Jayapura",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Doora",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Danagalli",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Rayanakere",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Marballi",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570008,
        "area": "Gujjegowdanapura",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570009,
        "area": "Saraswathipuram",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Chamundi Betta",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "PTC Campus",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Varakodu",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Yadakola",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Ittigegud",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Varuna",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Duddagere",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570010,
        "area": "Keelanapura",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570011,
        "area": "Siddarthanagar Nagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570012,
        "area": "Jayalakshmipuram",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570014,
        "area": "Jayanagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570015,
        "area": "Bannimantap",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570015,
        "area": "Shivaraathreeswar Nagar",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570016,
        "area": "Hebbal Layout",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570016,
        "area": "Metagalli",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570017,
        "area": "Vijaynagar II Stage",
        "city": "Mysore",
        "state": "KARNATAKA"
    },
    {
        "pincode": 570017,
        "area": "Vijaynagar III Stage",
        "city": "Mysore",
        "state": "KARNATAKA"
    }
]

const propertyDb = [
    {
        // ids
        propertyId: "P1001",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570001,
        // features
        propertyType: "Rent",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street",
        price: 15000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: "1 year old property",
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1200,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: 1,
        noOfOpenParking: 1,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/tiny-house-10.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1002",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570016,
        // features
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 3,
        noOfBalconies: 2,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "197,2nd Street",
        price: 1200000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: "1 year old property",
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1800,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: 1,
        noOfOpenParking: 1,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/tiny-house-3.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1003",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570016,
        // features
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "19,4th Street",
        price: 1200000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: "1 year old property",
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: 1,
        noOfOpenParking: 1,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/tiny-house-4.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1004",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570017,
        // features
        propertyType: "Rent",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "19,8th Street",
        price: 8000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: "1 year old property",
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: 1,
        noOfOpenParking: 1,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/tiny-house-5.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1005",
        sellerId: "U1001",
        buyerId: "U1002",
        pincode: 570017,
        // features
        propertyType: "Rent",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 1,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street",
        price: 9000,
        Advance: 30000,
        transactionType: "New",
        ageOfProperty: "1 year old property",
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 900,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: 1,
        noOfOpenParking: 1,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/tiny-house-6.jpg",
        extras: "Pets are not allowed"
    },
    {
        // ids
        propertyId: "P1006",
        sellerId: "U1002",
        buyerId: "U1001",
        pincode: 570017,
        // features
        propertyType: "Sale",
        propertyOwnership: "Owner",
        buildingType: "House",
        noOfBathrooms: 2,
        noOfBedrooms: 2,
        noOfBalconies: 1,
        furnishing: "Fully Furnished",
        availability: "Ready to move",
        // amenities
        lifts: true,
        ac: true,
        heater: false,
        maintenenceStaff: true,
        visitorParking: true,
        IntercomFacility: false,
        wifi: true,
        fireAlarm: false,
        WaterPurifier: false,
        PowerBackup: true,
        // highlights
        WaterSupplyFor24Hours: true,
        CloseToSchool: true,
        CloseToHospital: false,
        CloseToRailwayStation: true,
        CloseToBusStand: true,
        CloseToAirport: false,
        CloseToBank: true,
        CloseToPark: false,
        // other details
        status: "Available",
        Address: "196,12th Street",
        price: 120000,
        Advance: 50000,
        transactionType: "New",
        ageOfProperty: "1 year old property",
        availabilityBy: "Within 2 weeks",
        totalFloors: 10,
        PropertyFloor: 5,
        propertyArea: 1000,
        poojaRoom: true,
        servantRoonm: true,
        noofCoveredParking: 1,
        noOfOpenParking: 1,
        description: "Recently renovated and restored. Upper Unit - 2 Bedrooms 2 Full Bathroom - New kitchen, appliances, bathroom and flooring - Kitchen appliances included: Refrigerator, Gas Oven/ Range, Dishwasher, Over the Range Microwave - Private Washer and Dryer - 2 driveway parking spaces - All Bedrooms have large closets - 2 minute walk from village center: Restaurants, cafes, shops, bars, festivals, farmers market - Tenant pays Gas and Electricity - Available Immediately - Sorry, no pets Tenant pays gas and electricity",
        imageUrls: "../../../assets/tiny-house-7.jpg",
        extras: "Pets are not allowed"
    }
]

exports.setupDb = () => {
    return collection.getUserCollection().then((user) => {
        return user.deleteMany().then(() => {
            return user.insertMany(userDb).then(() => {
                return collection.getRoleCollection().then((role) => {
                    return role.deleteMany().then(() => {
                        return role.insertMany(roleDb).then(() => {
                            return collection.getLocationCollection().then((location) => {
                                return location.deleteMany().then(() => {
                                    return location.insertMany(locationDb).then(() => {
                                        return collection.getPropertyCollection().then((property) => {
                                            return property.deleteMany().then(() => {
                                                return property.insertMany(propertyDb).then((data) => {
                                                    if (data) return "Insertion Successfull"
                                                    else {
                                                        let err = new Error("Insertion failed");
                                                        err.status = 400;
                                                        throw err;
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

// exports.setupDb = () => {
//          return collection.getUserCollection().then((user) => {
//              return user.deleteMany().then(() => {
//                  return user.insertMany(userDb).then((data)=>{
//                      if(data) return "Insertion Successfull"
//                      else{
//                          let err = new Error("Insertion Failed")
//                          err.status = 400;
//                          throw err;
//                      }
//                  })

//                 })

//             })
//         }
