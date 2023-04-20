function getYear(year = 0)
{    
    
    if(typeof year !== "number" || year == 0)
    {
        console.log("Invalid Year");
        return 0;
    }

    const now = new Date();
    const thisYear = now.getFullYear();
    return thisYear - year;
}


const yourAge = getYear("2000");

console.log(`Your age is: ${yourAge}`);