const now = new Date();

console.log(now);

console.log(now.toDateString()); //Thu Apr 06 2023

console.log(now.toTimeString()); //10:11:54 GMT+0700 (Indochina Time)

console.log(now.toLocaleDateString()); //06/04/2023

console.log(now.toLocaleDateString("vi-VI"));

console.log(now.toISOString());