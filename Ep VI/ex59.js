//splice(n): n là bao nhiêu thì sẽ lấy bấy nhiêu phần tử từ vị trí n trở về sau

const pets = ["bird", "dog", "cat", "lion"];
const pets2 = pets.splice(2);
console.log(pets); //["bird", "dog"]


//splice(start, deletecount): 
//start vị trí bắt đầu muốn lấy
//delecount: xoá số lượng phần tử mong muốn
pets3 = pets.splice(0,1);
console.log(pets3); //["bird"]
console.log(pets); //["bird"]