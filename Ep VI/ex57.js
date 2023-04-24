//các phương thức của mảng - part 2

const student = ["Thảo", "Mai", "Trung", "Tài", "Ý", "Thảo", "Mai"];


//indexOf(): trả vị trí đầu tiên chứa phần tử đó
console.log(student.indexOf("Mai"));


//lastIndexOf(): trả vị trí cuối cùng chứa phần tử đó
console.log(student.indexOf("Tài"));


//push(): thêm phần tử vài CUỐI mảng
console.log(student.push("JS Script"));
console.log(student);

//unshift(): thêm phần tử vào đầu mảng
student.unshift("Hello");
console.log(student);

//pop(): xoá phần tử CUỐI CÙNG trong mảng
student.pop();
console.log(student);

//shift(): xoá phần tử ĐẦU TIÊN trong mảng
student.shift();
console.log(student);