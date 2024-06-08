let start = document.querySelector(".start");
let stoper = document.querySelector(".end");
let rst = document.querySelector(".rst");
let mins = document.querySelector(".minutes");
let secs = document.querySelector(".secs");

let minute = 0;
let second = 0;
let timer = false;
start.addEventListener("click", function () {
  timer = true;
  console.log("saad");
  runTimer();
});

stoper.addEventListener("click", function () {
  timer = false;
});

rst.addEventListener("click", function () {
  timer = false;
  minute = 0;
  second = 0;
  count = 0;
  innerHTML = "00";
  mins.innerHTML = "00";
  secs.innerHTML = "00";
});

function runTimer() {
  if (timer) {
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let minString = minute;
    let secString = second;

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    mins.innerHTML = minString;
    secs.innerHTML = secString;
    setTimeout(runTimer, 1000);
  }
}