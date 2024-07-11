const today = new Date();
let indexOfCurrentMonth = today.getMonth();
let months = [];

for (let i = indexOfCurrentMonth -2; i <= indexOfCurrentMonth + 3; i++) {
    today.setMonth(i);
    console.log(today.toLocaleString('default', {month : "long"}));
}