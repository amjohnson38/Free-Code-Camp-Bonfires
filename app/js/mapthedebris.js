function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    // loops through the array
    arr.forEach(function(property){
        
        var orbperiod = 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + property.avgAlt), 3) / GM);
        orbperiod = Math.round(orbperiod);
        console.log(orbperiod);
        delete property.avgAlt; 
        property.orbitalPeriod =orbperiod;
    });
   return arr;
}


orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
