//setTimeout và setInterval

setTimeout(function()
{
    alert("call me after 3 secs");
}, 3000);

const timer = setInterval(function(){
    console.log("This is timer");
clearInterval(timer);
}, 1000);
