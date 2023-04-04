function findMax(a = 0, b = 0)
{
    return Math.max(a, b);
}

// function printMax(value)
// {   
//     let max = value(500, 1000);
//     console.log(`Max is ${max}`);
// }

// printMax(findMax);


function useCallBack(a, b, callback) //useCallBack(500, 1000, printMax2(value))
{
    let max = findMax(a, b); //max = 1000
    callback(max); //callback(max) = printMax2(value = max)
}

function printMax2(value) //printMax2(value = max)
{
    console.log(`Max number is ` + value);
}

useCallBack(500, 1000, printMax2);