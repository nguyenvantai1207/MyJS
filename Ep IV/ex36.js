// viết function so sánh 2 số a, b tìm ra số lớn hơn

function comparasion(a = 0, b = 0)
{   
    if(typeof a != "number" || typeof b != "number")
    {
        return 0;
    }
    let message = a < b ? "B is greater than A" : a == b ? "A is equal B" : "A is greater than B";

    return message;
}

let callFunc = comparasion;
console.log(callFunc(10, 20));
// console.log(callFunc("abc"));

// cách 2 dùng math.max(a, b);