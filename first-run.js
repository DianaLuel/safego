const STORAGE_KEY = "safego365-legal-accepted-v1";
const shell = document.querySelector(".app-shell");
const agreement = document.querySelector("#agreement");
const accept = document.querySelector("#accept");

function setAccepted() {
  localStorage.setItem(STORAGE_KEY, "true");
  shell.classList.add("accepted");
}

if (localStorage.getItem(STORAGE_KEY) === "true") {
  shell.classList.add("accepted");
}

agreement.addEventListener("change", () => {
  accept.disabled = !agreement.checked;
});

accept.addEventListener("click", () => {
  if (agreement.checked) setAccepted();
});
