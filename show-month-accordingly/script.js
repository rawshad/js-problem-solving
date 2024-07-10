// Show Current month, previous two month and next three months dynamically using Date methods ex: May, June, July, August, September, October.

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const currentMonthIndex = new Date().getMonth();
const monthsToShow = month.slice(currentMonthIndex -2, currentMonthIndex + 4);
console.log(monthsToShow);
document.getElementById("months").innerHTML = monthsToShow;

