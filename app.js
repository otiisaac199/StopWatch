let hr = 0;
let min = 0;
let sec = 0;
let t;

function startTimer() {
  if (sec < 59) {
    sec++;
    document.getElementById("sec").innerHTML = print(sec);
  } else {
    sec = 0;
    min++;
    document.getElementById("sec").innerHTML = print(sec);
  }
  if (min <= 59) {
    document.getElementById("min").innerHTML = print(min);
  } else {
    min = 0;
    hr++;
    document.getElementById("min").innerHTML = print(min);
  }
  if (hr < 24) {
    document.getElementById("hr").innerHTML = print(hr);
  } else {
    stop();
  }
  function print(val) {
    if (val <= 9) {
      return "0" + val;
    } else {
      return val;
    }
  }
}
function start() {
  t = setInterval(startTimer, 1000);
  document.getElementById("start").disabled = true;
}
function stop() {
  clearInterval(t);
  document.getElementById("stop").disabled = false;
}
function reset() {
  clearInterval(t);
  sec = 00;
  min = 00;
  hr = 00;
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = ":" + "00";
  document.getElementById("hr").innerHTML = "." + "00";
}
