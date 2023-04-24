//sort
//sắp xếp phần tử trong mảng theo chuẩn Unicode-16

const random = [1, 9999, 1000000, 5, 09];
console.log(random.sort()); //[1, 1000000, 5, 9, 9999]

//function(callback)
// const random2 = random.sort(function(a, b){
//     if(a > b) return 1; //đổi vị trí cho nhau
//     if(a < b) return -1; //không đổi vị trí cho nhau
// });
// console.log(random2);

function sortArray(callback)
{   
    callback();
    if(a > b) return 1;
    if(a < b) return -1;
}

random2 = sortArray(random.sort());
console.log(random2);