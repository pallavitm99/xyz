class property{
    constructor ( obj ){
        this.propertyId = obj.propertyId;
        this.sellerId = obj.sellerId;
        this.buyerId = obj.buyerId;
        this.pincode = obj.pincode;
        this.propertyType = obj.propertyType;
        this.propertyOwnership = obj.propertyOwnership;
        this.buildingType = obj.buildingType;
        this.noOfBathroom = obj.noofBathroom;
        this.noOfBedroom = obj.noOfBedroom;
        this.noOfBalconies = obj.noOfBalconies;
        this.availability = obj.availability;


        //amenties
        this.lift = obj.lift;
        this.ac = obj.ac;
        this.heater = obj.heater;
        this.maintenanceStaff = obj.maintenanceStaff;
        this.visitorParking = obj.visitorParking;
        this.IntercomFacility = obj.IntercomFacility;
        this.wifi = obj.wifi;
        this.fireAlaram = obj.fireAlaram;
        this.WaterPurifier = obj.WaterPurifier;
        this.PowerBackup = obj.PowerBackup;
        
        //highlights

        this.waterSupplyFor24Hours = obj.waterSupplyFor24Hours;
        this.CloseToSchool = obj.CloseToSchool;
        this.CloseToHospital = obj.CloseToHospital;
        this.CloseToRailwayStation = obj.CloseToRailwayStation;
        this.CloseToBusStand = obj.CloseToBusStand;
        this.CloseToAirport = obj.CloseToAirport;
        this.CloseToBank = obj.CloseToBank;
        this.CloseToPark = obj.CloseToPark;


        //other details

        this.status = obj.status;
        this.Address = obj.Address;
        this.price = obj.price;
        this.advance = obj.advance;
        this.transactionType = obj.transactionType;
        this.ageOfProperty = obj.ageOfProperty;
        this.availabilityBy = obj.availabilityBy;
        this.totalFloors = obj.totalFloors;
        this.PropertyFloor = obj.PropertyFloor;
        this.propertyArea = obj.propertyArea;
        this.poojaRoom = obj.poojaRoom;
        this.servantRoom = obj.servantRoom;
        this.noOfCoveredParking = obj.noOfCoveredParking;
        this.noOfOpenParking = obj.noOfCoveredParking;
        this.description = obj.description;
        this.imageUrls = obj.imageUrls;
        this.extras = obj.extras;
    }
}

module.exports = property;