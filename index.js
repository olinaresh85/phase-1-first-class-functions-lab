// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

let fare = 3

function createFareMultiplier(multiplier) {
    return fare => fare*multiplier
 }
 
 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)
  


function selectDifferentDrivers (drivers, conditional) {
   return conditional(drivers);
}
