function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hh}:${mm}:${ss}`;
}
setInterval(updateClock, 1000);
updateClock();

const checkbox = document.getElementById("theme-switch");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bg-dark");
    document.body.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--text-dark");
  } else {
    document.body.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bg-light");
    document.body.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--text-light");
  }
});
