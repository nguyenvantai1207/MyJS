//Slice method: sao chép mảng

const animal = ["tiger", "horse", "elephant", "bear"];
const animal2 = animal.slice();

console.log(animal2);

//2. slice(start): lấy từ vị trí đó trở về sau
animal3 = animal2.slice(1);
console.log(animal3);

//3. slice(start, end)
// start: vị trí ban đầu
// end: vị trí cuối cùng
// lưu ý nó sẽ sao chép từ vị trí start đến vị trí end - 1
animal3 = animal.slice(1, 3);
console.log(animal3);

//4. slice(-index)
//lấy người lại từ phần tử bắt đầu từ vị trí cuối