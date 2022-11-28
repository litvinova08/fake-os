// // Get the modal menu
const modalMenu = document.querySelector(".menu");
// // Get the button that opens the modal
const startBtn = document.querySelector(".toolbar__start");
// // When the user clicks on START, open the menu
startBtn.addEventListener("click", () => {
  modalMenu.classList.toggle("menu--open");
});

//when clicked anywhere on the page, close the menu; also remove all selections
document.addEventListener("click", () => {
  if (!startBtn.contains(event.target)) {
    modalMenu.classList.remove("menu--open");
  }
  if (!notepadIcon.contains(event.target)) {
    notepadIcon.style.backgroundColor = "";
  }
  if (!cmdIcon.contains(event.target)) {
    cmdIcon.style.backgroundColor = "";
  }
  if (!runIcon.contains(event.target)) {
    runIcon.style.backgroundColor = "";
  }
});

//Notepad elements
const notepadIcon = document.querySelector(".background__notepad-icon");
const notepad = document.querySelector(".notepad");
const notepadCloseBtn = document.querySelector(".notepad__close-btn");
const notepadInput = document.querySelector("#notepad__textarea");

//when user clicks once, select an icon
notepadIcon.addEventListener("click", () => {
  notepadIcon.style.backgroundColor = "#68a2e0";
});

// When the user double clicks on Notepad, open the Notepad window
notepadIcon.addEventListener("dblclick", () => {
  notepad.classList.toggle("notepad--open");
});

// When the user clicks on X in Notepad, clean textarea & close the Notepad window
notepadCloseBtn.addEventListener("click", () => {
  notepadInput.value = "";
  notepad.classList.remove("notepad--open");
});
// when clicked somewhere, close the Notepad window

//command prompt elements
const cmdIcon = document.querySelector(".background__cmd");
const cmd = document.querySelector(".cmd");
const cmdCloseBtn = document.querySelector(".cmd__close-btn");

//when user clicks once, selects an icon
cmdIcon.addEventListener("click", () => {
  cmdIcon.style.backgroundColor = "#68a2e0";
});
// When the user double clicks on Cmd, open the Cmd window
cmdIcon.addEventListener("dblclick", () => {
  cmd.classList.toggle("cmd--open");
});

// When the user clicks on X in Cmd, close the Cmd window
cmdCloseBtn.addEventListener("click", () => {
  cmd.classList.remove("cmd--open");
});

//run elements
const runIcon = document.querySelector(".background__run");
const run = document.querySelector(".run");
const runCloseBtn = document.querySelector(".run__close-btn");

//when user clicks once, selects an icon
runIcon.addEventListener("click", () => {
  runIcon.style.backgroundColor = "#68a2e0";
});
// When the user double clicks on Cmd, open the Cmd window
runIcon.addEventListener("dblclick", () => {
  run.classList.toggle("run--open");
});
// When the user clicks on X in Cmd, close the Cmd window
runCloseBtn.addEventListener("click", () => {
  run.classList.remove("run--open");
});

//time display
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};
const interval = setInterval(() => {
  const now = new Date();
  const dateTime = zeroFill(now.getHours()) + ":" + zeroFill(now.getMinutes());
  document.getElementById("time").innerHTML = dateTime;
}, 1000);
