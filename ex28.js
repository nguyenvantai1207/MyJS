//command: condition ? true : false

let yourAge = 18;
let message = "";

if (yourAge > 18) {
  message = "You are an aldut";
} else {
  message = "You still a child";
}

//ternary operator
//command: condition ? true : false
// yourAge = 16;

// let message2 = yourAge >= 18 ? "you are an aldut" : "You still a child";

// console.log(message2);

let budget = 5;

let message3 =
  budget == 10
    ? "You can buy a pen"
    : budget < 10
    ? "You can not buy anything"
    : "You can buy one more books";

console.log(message3);
