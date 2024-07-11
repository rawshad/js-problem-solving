let currentDate = new Date();
let firstDate = currentDate.getDate() - currentDate.getDay();
let lastDate = firstDate + 6;
let firstWeekDay = new Date(currentDate.setDate(firstDate)).toLocaleString();
let lastWeekDay = new Date(currentDate.setDate(lastDate)).toLocaleString()
console.log(firstWeekDay, lastWeekDay);