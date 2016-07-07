
function makeFriendlyDates(arr) {
var newArr1=arr[0].split("-");
var newArr2=arr[1].split("-");
var dateRangeStrs=[];
dateRangeStrs=newArr1.concat(newArr2);
  console.log(dateRangeStrs);
  //return arr;

  function getGetOrdinal(n) {
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
  }


}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);


/* function replaceMonth(monthSwitch){
case(monthSwitch){
 case "01": 
  month="January"
  return month;
case "02": 
  month="February"
  return month;
case "03": 
  month="March"
  return month;
case "04": 
  month="April"
  return month;
case "05": 
  month="May"
  return month;
case "06": 
  month="June"
  return month;
case "07": 
  month="July"
  return month;
case "08": 
  month="August"
  return month;
case "09": 
  month="September"
  return month;
case "10": 
  month="October"
  return month;
case "11": 
  month="January"
  return month;
case "01": 
  month="January"
  return month;
}
}*/

