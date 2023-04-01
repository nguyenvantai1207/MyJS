//title: closure

let newName = "Danny"; //global scope
function sayHello() {
  let message = "Hi"; //block scope
  console.log(`${message} ${newName}`);
}
sayHello(); //invoked function


//closure: function inner có thể truy xuất scope của function outer
function sayHello2() //outer(parent) function
{
    let message = "Hi";
    function sayHi() //inner(child) function
    {
        console.log(message);
    }
    return sayHi;
}

let hello = sayHello2();
hello();



//closure2
function sayHello3(message)
{
    return function hiYourName(name)
    {
        console.log(`${message} ${name}`);
    }
}

let hello1 = sayHello3("welcome to JS");
hello1("Danny");