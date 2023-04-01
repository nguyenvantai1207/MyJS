// title: Ex 31 -> 33

// Anonymous function(function expression)
// Function declaration
//  Không bị hoisting
const logname = function ()
{
    console.log("your name");
}
logname();


//IIFE => immediately ivonked function execution
(function ()
{
    console.log("This is IIFE function");
})();