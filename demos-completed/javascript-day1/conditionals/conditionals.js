let day = new Date().getDay(); // get the day of the week (0-6)
console.log(day); // Tuesday is 2

let reply; // initialize a variable to store the message reply


if (day == 2 || day == 4){ // if the day is Tues (2) or Thurs (4)
    reply = "Yes, you have class today!";
}
else if (day == 6 || day == 0){ // if the day is Sat (6) or Sun (0)
    reply = "No, on a weekend?";
} 
else { // the rest of the days of the week where day is 1, 3, 5
    reply = "No, you don't have class today.";
}

// access the HTML element with ID 'answer' 
let answer = document.getElementById("answer");
// and set its text content to display the reply
answer.textContent = reply;