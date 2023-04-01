// function

//syntax function
//function Funtion_name(paramenters - tham số)
// your code here

function sum(a = 0, b = 0) // nên set giá trị mặc định vì nếu không sẽ bị undefined
{
//   console.log(a, b);
  //return: trả về 1 kết quả gì đó
  return a + b; //không có return thì result là undefined
}

//invoke function
console.log(sum(5, 10));
//invoke function sum(arguments - đối số) 