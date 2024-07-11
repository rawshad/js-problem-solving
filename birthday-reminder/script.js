let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
let birthYear = new Date("23 november, 1991").getFullYear();
let birthMonth = new Date("23 november, 1991").getMonth();
let birthDay = new Date("23 november, 1991").getDate();
let date, month, age;
let btnEl = document.getElementById("reminder");
let dateInputEl = document.getElementById("date");


btnEl.addEventListener('click', function () {
    let dateInput = dateInputEl.value;
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    let birthYear = new Date(dateInput).getFullYear();
    let birthMonth = new Date(dateInput).getMonth();
    let birthDay = new Date(dateInput).getDate();
    let nextBirthMonth, nextBirthday, nextBirthYear;
    let date, month, age;
    age = currentYear - (birthYear);
    month = currentMonth - birthMonth;
    date = currentDay - birthDay;
    document.getElementById("reminder-message").innerHTML =`<p>
    you are ${age} years age old and you have ${month} month's and ${date} day's left till next birhtday!
    </p>`
    console.log("you are " + age + " years age old", "you have " + month + "'s and " + date + "day's left till next birhtday");
});



// if (currentDay < birthDay) {
//     date = (currentDay + 30) - birthDay;
//     month = (currentMonth) - (birthMonth + 1);
//     age = (currentYear) - (birthYear);
//     console.log("1st line: ", date, month, age);
// }
// if (currentMonth < birthMonth) {
//     date = currentDay - birthDay;
//     month = (currentMonth + 12) - birthMonth;
//     age = currentYear - (birthYear + 1);
//     console.log("2nd line :", date, month, age);
// }
// if (currentDay < birthDay && currentMonth < birthMonth) {
//     date = (currentDay + 30) - birthDay;
//     month = (currentMonth + 12) - birthMonth;
//     age = currentYear - (birthYear + 1);
//     console.log("third line :", date, month, age);
// }
// if (currentDay >= birthDay && currentMonth < birthMonth) {
//     date = currentDay - birthDay;
//     month = (currentMonth + 12) - birthMonth;
//     age = currentYear - (birthYear + 1);
//     console.log(date, month, age);
// }
// if (currentDay >= birthDay && currentMonth >= birthMonth) {
//     date = currentDay - birthDay;
//     month = currentMonth - birthMonth;
//     age = currentYear - birthYear;
//     console.log("nutral: ", date, month, age);
// }