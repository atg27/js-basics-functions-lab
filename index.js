function distanceFromHqInBlocks (pickup) {
  const blocks = Math.abs(42 - pickup);
  return blocks;
 } 

 function distanceFromHqInFeet (pickup) {
  const feet = (Math.abs(42 - pickup) * 264);
  return feet;
 } 

 function distanceTravelledInFeet (start, stop) {
  const feet = (Math.abs(start - stop) * 264);
  return feet;
 } 

 function calculatesFarePrice (start, destination) {
  const fareDistance = (Math.abs(start - destination) * 264);
  if (fareDistance <= 400) {
    return 0;
  } else if (fareDistance > 400 && fareDistance <= 2000) {
    const shortRide = ((fareDistance - 400) * 0.02) ;
    return shortRide;
  } else if (fareDistance > 2000 && fareDistance < 2500) {
    
    return 25;
  } else if (fareDistance >= 2500) {
    return 'cannot travel that far';
  }
 } 