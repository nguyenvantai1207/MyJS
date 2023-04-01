function add(a = 0, b = 0)
{
    return a + b;
}

const sum = add; //add là function, sum là tham số
//tham số là function
console.log(sum(100, 200));

//tính trung bình 

function average(a, b, fn)
{
    const total = fn(a, b); //fn(a, b) = sum(100, 200)
    return total / 2;
}

let result = average(100, 200, sum);
console.log(`result ${result}`);

//tính hiệu của 2 số

function sub(a = 0, b = 0)
{
    return a - b;
}

let sum2 = sub;
// --Cach 1--
// console.log(sum2(200, 100));

// function addNum(a, b, fn)
// {
//     const total = fn(a, b); // hàm sum2 thực hiện
//     return total + 50; //hàm addNum thực hiện
// }

// const result2 = addNum(300, 100, sum2);
// console.log(result2);


// --Cach 2--
// function addNum(a, b)
// {
//     const total = sum2(a, b);
//     return total + 50;
// }

// const result2 = addNum(300, 100);
// console.log(result2);