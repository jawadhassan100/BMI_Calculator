// !  Height to Cm calculator

const secondDiv = document.getElementById("secondDiv");
const back = document.querySelector(".back");
const feet = document.getElementById("heightinfeet");
const inches = document.getElementById("heightinInch");
const Button2 = document.getElementById("calculateCm");
const calculatedHeight = document.getElementById("calculatedHeight");
const Div2 = document.getElementById("firstDiv");


back.addEventListener("click" , () => {
    secondDiv.style.display = "none";
    mainDiv.style.transform = "translateX(0px)";
})

Button2.addEventListener("click", cmFun);
function cmFun() {
  const Feet = parseFloat(feet.value);
  const Inches = parseFloat(inches.value);
  const CM = (Feet * 12 + Inches) * 2.54;
  const finalCM = CM.toFixed(1)

  if (feet.value && inches.value) {
      calculatedHeight.innerText = `${finalCM}`;
  } else {
      calculatedHeight.innerText = "";
  }
}

cmFun();
