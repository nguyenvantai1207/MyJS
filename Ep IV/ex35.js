function anotherFunction()
{
    let otherMessage = "Hi";
    function sayHi()
    {
        console.log(otherMessage);
    }
    return sayHi;
}

let hello = anotherFunction(); //otherMessage is no longer accesible
hello(); //Hi