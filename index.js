// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    
    const hqLocation = 42;
  
const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
  

    return distanceInBlocks;
}
  
function distanceFromHqInFeet (Pickup){
    const hq = 42;

const lenthInFeetPerBlock= 264;

const distanceFromHqInFeet = Math.abs((Pickup-hq)*lenthInFeetPerBlock);

return distanceFromHqInFeet;


}
function distanceTravelledInFeet(start, destination) {
    const oneBlockLengthInFeet =264;
    const distanceTravelledInFeet = Math.abs((destination-start)*oneBlockLengthInFeet);

    return distanceTravelledInFeet;
    
  }


  function calculatesFarePrice(start, destination) {
    const oneBlockLengthInFeet = 264;
    const distanceTravelledInFeet = Math.abs((destination - start) * oneBlockLengthInFeet);

    if (distanceTravelledInFeet <= 400) {
        return 0;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
        return (distanceTravelledInFeet - 400) * 0.02;
    } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}   
    
    


    
  


