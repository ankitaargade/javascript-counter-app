let count = 0;
window.addEventListener("load", () => {
  document.getElementById("count").innerText = count;
  checkCount(count);
});
document.getElementById("increase").addEventListener("click", () => {
  document.getElementById("count").innerText = ++count;
  checkCount(count);
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  document.getElementById("count").innerText = count;
  checkCount(count);
});

document.getElementById("decrease").addEventListener("click", () => {
  document.getElementById("count").innerText = --count;
  checkCount(count);
});

function checkCount(count) {
  if (count > 0) {
    document.getElementById("count").style.color = "green";
  } else if (count < 0) {
    document.getElementById("count").style.color = "red";
  } else {
    document.getElementById("count").style.color = "black";
  }
}
