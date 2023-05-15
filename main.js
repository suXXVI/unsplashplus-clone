const btns = document.querySelectorAll(".buttons button");
const toggleDiv = document.querySelector(".toggle-div");
const infoOne = document.querySelector(".info-one");
const showInnMonthly = document.querySelector(".show-in-monthly");
const changeValue = document.querySelector(".change-value");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.test === "Route-Plus-TierToggle-Monthly-Toggle") {
      moveToMonthly(e);

      if (window.navigator.userAgentData.mobile) {
        blinkBackground(e.target);
      }
      handleBtns(e.target);
    } else {
      moveToYearly(e);
      if (window.navigator.userAgentData.mobile) {
        blinkBackground(e.target);
      }
      handleBtns(e.target);
    }
  });
});

function moveToMonthly(e) {
  toggleDiv.style.left = 4 + "px";
  toggleDiv.style.width = 84.53 + "px";
  e.target.nextSibling.classList.remove("active");
  e.target.classList.add("active");
}

function moveToYearly(e) {
  toggleDiv.style.left = 89 + "px";
  toggleDiv.style.width = 137.91 + "px";
  e.target.previousSibling.classList.remove("active");
  e.target.classList.add("active");
}

function blinkBackground(elem) {
  elem.style.backgroundColor = "lightblue";
  setTimeout(() => {
    elem.style.backgroundColor = "initial";
  }, 100);
}

function handleBtns(elem) {
  if (elem.classList.contains("monthly")) {
    infoOne.style.display = "none";
    showInnMonthly.style.display = "block";
    changeValue.textContent = "$8";
  } else {
    infoOne.style.display = "block";
    showInnMonthly.style.display = "none";
    changeValue.textContent = "$4";
  }
}

showInnMonthly.addEventListener("click", () => {
  toggleDiv.style.left = 89 + "px";
  toggleDiv.style.width = 137.91 + "px";
  infoOne.style.display = "block";
  showInnMonthly.style.display = "none";
  changeValue.textContent = "$4";
});
