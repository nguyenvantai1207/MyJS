// In hoa chữ cái đầu trong ví dụ: tuan -> Tuan

// Cách 1:
// function checkChar(myStr)
// {   
//     if(myStr.length === 0) return null;
    
//     let firstChar = myStr.slice(0,1);
//     let message = firstChar === firstChar.toLowerCase() ? 
//     `${firstChar} is LowerCase` : `${firstChar} is UpperCase`;

//     return message;
// }


// function toUpperCase(myStr)
// {   
//     console.log(checkChar(myStr));
//     let firstChar = myStr.slice(0,1);
//     myStr = myStr.slice(1).toLowerCase();

//     return `${firstChar}${myStr}`;
// }

// console.log(toUpperCase(""));


// Cách 2:

function capitalize(word = "")
{
    if(word.length === 0) return null;
    //convert to lower case first
    let newWord = word.toLocaleLowerCase().charAt(0).toUpperCase();
    //charAt(index)
    //slice(startIndex, endIndex - 1)
    // hello -> slice(0, 3) -> hel
    // hello -> slice(1) -> ello
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
console.log(capitalize("VIETNAM"));

