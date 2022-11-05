//handle initial splash
function wait (timeMs) {
  return new Promise(resolve => {
    setTimeout(resolve, timeMs)
  })
}

initialSplash = document.getElementById("initial-splash")
diamondLogo = document.getElementById("diamond-logo")
html = document.querySelector("html")

async function handleInitialSplash () {
  await wait(2000)
  diamondLogo.classList.add("animate__animated")
  diamondLogo.classList.add("animate__zoomOut")
  diamondLogo.classList.add("animate__faster")

  await wait(1000)
  initialSplash.classList.add("animate__animated")
  initialSplash.classList.add("animate__fadeOut")

  await wait(300)
  initialSplash.style.display = "none"
  html.style.overflowY = "auto"
}

handleInitialSplash()



// handle display company container
lavappContainer = document.querySelector(".lavapp-container")
petroplusContainer = document.querySelector(".petroplus-container")
znapContainer = document.querySelector(".znap-container")
lavappButton = document.querySelector(".lavapp-button")
petroplusButton = document.querySelector(".petroplus-button")
znapButton = document.querySelector(".znap-button")

lavappButton.addEventListener("click", function () {
  lavappContainer.classList.remove("display-none")
  lavappButton.classList.add("company-selected")
  petroplusContainer.classList.add("display-none")
  petroplusButton.classList.remove("company-selected")
  znapContainer.classList.add("display-none")
  znapButton.classList.remove("company-selected")
})

petroplusButton.addEventListener("click", function () {
  petroplusContainer.classList.remove("display-none")
  petroplusButton.classList.add("company-selected")
  lavappContainer.classList.add("display-none")
  lavappButton.classList.remove("company-selected")
  znapContainer.classList.add("display-none")
  znapButton.classList.remove("company-selected")
})

znapButton.addEventListener("click", function () {
  znapContainer.classList.remove("display-none")
  znapButton.classList.add("company-selected")
  lavappContainer.classList.add("display-none")
  lavappButton.classList.remove("company-selected")
  petroplusContainer.classList.add("display-none")
  petroplusButton.classList.remove("company-selected")
})



// handle hide header on scroll
var prevScrollpos = window.pageYOffset;
const header = document.querySelector("header")
const arrowUp = document.getElementById("arrow-up")

window.onscroll = function() {

  if (window.pageYOffset === 0) {
    header.classList.remove("shadow")
  } else {
    header.classList.add("shadow")
  }

  if (window.pageYOffset >= 300) {
    arrowUp.style.bottom = "24px"
  } else {
    arrowUp.style.bottom = "-80px"
  }

  if (html.style.overflowY === "auto") {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
  }
}