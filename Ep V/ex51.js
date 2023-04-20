//alarm programming

function countDown(min = 0) {
  // min = 1p
  let second = min * 60;
  let counter = 0;

  const timer = setInterval(function () {
    counter += 1;
    console.log(counter);
    if (counter === second) {
      clearInterval(timer);
      console.log("Your time is end");
    }
  }, 1000);
}

countDown(1);
