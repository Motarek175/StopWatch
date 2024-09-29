let hours = document.querySelector(".hour span");
let minutes = document.querySelector(".minute span");
let seconds = document.querySelector(".second span");
let count = document.querySelector(".count span");
let start = document.querySelector(".container .buttons .start button");
let pause = document.querySelector(".container .buttons  .pause button");
let reset = document.querySelector(".container .reset button");
let cnt = 0;
let sec = 0;
let min = 0;
let hour = 0;

function format(time) {
  return time < 10 ? `0${time}` : time;
}

function display() {
  count.innerHTML = format(cnt);
  seconds.innerHTML = format(sec);
  minutes.innerHTML = format(min);
  hours.innerHTML = format(hour);
}

start.addEventListener("click", () => {
  start.setAttribute("disabled", "true");
  pause.removeAttribute("disabled");
  reset.removeAttribute("disabled");
  interval = setInterval(() => {
    cnt++;
    if (cnt === 100) {
      cnt = 0;
      sec++;
      if (sec == 60) {
        sec = 0;
        min++;
      }
      if (min == 60) {
        min = 0;
        hour++;
      }
    }
    display();
  }, 10);
});

pause.addEventListener("click", () => {
  start.removeAttribute("disabled");
  pause.setAttribute("disabled", "true");
  reset.removeAttribute("disabled");
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  pause.setAttribute("disabled", "true");
  reset.setAttribute("disabled", "true");
  start.removeAttribute("disabled");
  cnt = 0;
  sec = 0;
  min = 0;
  hour = 0;
  clearInterval(interval);
  display();
});
