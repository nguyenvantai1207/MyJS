// 4 ways to create object of Date


const now = new Date();
//built-in object: có sẵn trong Javascript
console.log(now);
// Wed Apr 05 2023 19:47:01 GMT+0700 (Indochina Time)
console.log(now.getTime()); //get timestamp

//4 cách sử dụng new Date

//new Date() -> in ra giờ hiện tại
console.log(new Date());

//new Date(timmestamp) -> in ra giờ hiện tại
console.log(new Date(1680699637843));

//new Date(date string)
console.log(new Date("Wed Apr 05 2023 20:00:37 GMT+0700 (Indochina Time)"));

//new Date(year, month, day, hours, minutes, seconds, miliseconds)
//month 0 => January
//month 1 => February
console.log(new Date(2021, 5, 1, 23, 23, 23, 23));
