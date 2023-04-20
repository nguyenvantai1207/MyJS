//tạo object date
const birthday = new Date(2000, 9, 5);

//get year
console.log(birthday.getFullYear());

//get month: 0 - 11
//0 - tháng 1
//1 - tháng 2
console.log(birthday.getMonth());

//get date: lấy ngày 
console.log(birthday.getDate());

//get day: lấy thứ trong tuần
// 0 - 6
// 0 là chủ nhật
// 6 là thứ 7
console.log(birthday.getDay());

//get Hours: lấy giờ
console.log(birthday.getHours());
//get Hours: lấy phút
console.log(birthday.getMinutes());
//get Hours: lấy miliseconds
console.log(birthday.getMilliseconds());
//lấy timestamps
console.log(birthday.getTime());