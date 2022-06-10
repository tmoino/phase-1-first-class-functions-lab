// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers (drivers){
    const driversNew = drivers.slice(0,2);
    return driversNew
}

function returnLastTwoDrivers (drivers){
    const lastDrivers = drivers.slice(-2);
    return lastDrivers;
}


const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(MultiValue){
    return function (Value){
        return (Value*MultiValue);
    }
}

function fareDoubler(createFareMultiplier){
    return (createFareMultiplier * 2);
}

function fareTripler (createFareMultiplier){
    return (createFareMultiplier * 3);
}

function selectDifferentDrivers (drivers, driversToway){
    return driversToway (drivers);

}
