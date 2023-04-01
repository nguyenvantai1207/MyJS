// In hoa chữ cái đầu trong ví dụ: tuan -> Tuan

// Cách 1:
function checkChar(myStr)
{   
    if(myStr === "") return null;
    
    let firstChar = myStr.slice(0,1);
    let message = firstChar === firstChar.toLowerCase() ? 
    `${firstChar} is LowerCase` : `${firstChar} is UpperCase`;

    return message;
}


function toUpperCase(myStr)
{   
    console.log(checkChar(myStr));
    let firstChar = myStr.slice(0,1);
    myStr = myStr.slice(1).toLowerCase();

    return `${firstChar}${myStr}`;
}

console.log(toUpperCase(""));


// Cách 2:



