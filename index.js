// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return [drivers[0], drivers[1]];
};

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnLastTwoDrivers = function (drivers){
    return [drivers[2], drivers[3]];
};

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

const createFareMultiplier = function (multiplier){
     function FareMultiplier (value){
       return value * multiplier;
    }
   
    return FareMultiplier;
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
  
function selectDifferentDrivers (drivers, pickfunction ){
  return pickfunction (drivers);
}
