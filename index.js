function distanceFromHqInBlocks(bd){

    const hQ = 42;
  
    return Math.abs(bd - hQ);
  }
      
    
    function distanceFromHqInFeet(feet){
  
        return (distanceFromHqInBlocks(feet)
        * 264);
      }
      
    function distanceTravelledInFeet(start, destination){
  return Math.abs((start - destination ) * 264)
    }
  function  calculatesFarePrice (start, destination){
  
  let lowPrice= Math.abs((distanceTravelledInFeet(start, destination) -400 )* .02)
  
  if(distanceTravelledInFeet(start,   
  destination) < 400){
  return 0;}
  
  else if (distanceTravelledInFeet(start,   
    destination) > 2500 ){
      return "cannot travel that far"
  
    }
    else if (distanceTravelledInFeet(start,   
      destination) > 2000){
        return 25;
  
      }
  
  else if(distanceTravelledInFeet(start, destination) >= 400  ){
    return lowPrice }
    
    }