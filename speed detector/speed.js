let speedLimit = 70 // inputs drivers speed
const demeritPerKm = 5
 let demeritPoints = 0
if( speedLimit <= 70){
    console.log ("Ok")
}else if(speedLimit > 70){
    demeritPoints = Math.round(speedLimit - 70 /demeritPerkm) // calculates drivers demerit points based on how far 
                                                              // beyond the speed limit the driver is.   
    console.log (demeritPoints + "Demerit points")
    
}

if ( demeritPoints > 12){
    console.log ("License suspended")
}
