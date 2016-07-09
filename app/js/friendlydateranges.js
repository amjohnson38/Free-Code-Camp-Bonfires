
function makeFriendlyDates(arr) {
  var startDate = arr[0].split("-");
  var endDate = arr[1].split("-");

  startDate[1] = replaceMonth(startDate[1]);
  endDate[1] = replaceMonth(endDate[1]);

  startDate[2] = getGetOrdinal(startDate[2]).replace(/^0+/, '');
  endDate[2] = getGetOrdinal(endDate[2]).replace(/^0+/, '');

  var dateRange = checkDates(startDate, endDate);

  var finalDateRange = formatAnswer(startDate, endDate);
  console.log(finalDateRange);
  return finalDateRange;
}

/*formats the endDate and startDate arrays into the final answer. 
@param startDate - An array of strings that has the year, month and date
@param endDate- An array of strings that has the year, month and date
@return-the final answer after startDate and endDate has been formatted. Returned is an array with one or two strings.
representing the friendly date range.["July 1st","4th"] and ["July 1st, 2016", "July 4th, 2018"] are both examples.
*/
function formatAnswer(startDate, endDate) {
  var temp = [];
  var startStr = "";
  var endStr = "";

  startStr = startDate[1] + " " + startDate[2];
  if (startDate[0] !== "-") {
    startStr += ", " + startDate[0];
  }

  if (endDate[1] !== "-") {
    endStr = endDate[1];

  }
  if (endDate[2] !== "-") {
    endStr += " " + endDate[2];
  }

  if (endDate[0] !== "-") {
    endStr += ", " + endDate[0];
  }
  startStr = startStr.trim();
  endStr= endStr.trim();
  if (endStr === "") {
    temp.push(startStr);
  }
  else {
    temp.push(startStr, endStr);
  }
  return temp;
}

/***********************************************************
 * 
 */
function checkDates(startDate, endDate) {
  if ((startDate[0] == endDate[0]) && (startDate[1] === endDate[1]) && (startDate[2] === endDate[2])) {
    endDate[0] = "-";
    endDate[1] = "-";
    endDate[2] = "-";
  }


  if (startDate[0] === "2016") {
    if ((endDate[0] === "2016") || (endDate[0] === "2017")) {
      startDate[0] = "-";
      endDate[0] = "-";
    }
  }
  if (endDate[0] == Number(startDate[0]) + 1) {
    if(endDate[0]=="2016" )
    endDate[0] = "-";
  }

  if ((startDate[1] === endDate[1]) && (startDate[0] !== endDate[0])) {
    var startDay = startDate[2].substring(0, 1);
    var endDay = endDate[2].substring(0, 1);
    if (startDay > endDay) {
      endDate[0] = "-";
    }
  } else if (startDate[1] === endDate[1]) {
    endDate[1] = "-";
  }

  if (startDate[0] === endDate[0]) {
    endDate[0] = "-";
  }


  return [startDate, endDate];
}

function replaceMonth(month) {
  switch (month) {
    case "01":
      return "January";
    case "02":
      return "February";
    case "03":
      return "March";
    case "04":
      return "April";
    case "05":
      return "May";
    case "06":
      return "June";
    case "07":
      return "July";
    case "08":
      return "August";
    case "09":
      return "September";
    case "10":
      return "October";
    case "11":
      return "November";
    case "12":
      return "December";
  }
}


function getGetOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}





makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);




