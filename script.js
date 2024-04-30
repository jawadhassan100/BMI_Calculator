const Weight = document.getElementById("weight");
const Height = document.getElementById("height");
const Button = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const calculatedValue = document.getElementById("calculatedBmi");
const mainDiv = document.getElementById("firstDiv");
const rightArrow = document.querySelector(".kgToCm");
const Div = document.getElementById("secondDiv");

rightArrow.addEventListener("click", () => {
  mainDiv.style.transform = "translateX(-300px)";
  mainDiv.style.transition = "1s linear";
  setTimeout(() => {
    Div.style.display = "block";
  }, 1000);
  

});

resetButton.addEventListener("click", () => {
  Weight.value = "";
  Height.value = "";
  calculatedValue.innerText = "";
});

Button.addEventListener("click", userBMI);

function userBMI(e) {
  e.preventDefault();
  const userWeight = parseFloat(Weight.value);
  const userHeight = parseFloat(Height.value);
  if (Weight.value === "" || Height.value === "") {
    alert("Input feilds can not be empty!");
    calculatedValue.innerText = "";
  }
  const BMI = (userWeight / (userHeight * userHeight)) * 10000;
  const finalBMI = BMI.toFixed(1);
  console.log(finalBMI);

  if (finalBMI < 18.5) {
    calculatedValue.innerText = `Under weight : ${finalBMI}`;
  } else if (finalBMI >= 18.5 && finalBMI < 24.9) {
    calculatedValue.innerText = `Normal weight : ${finalBMI}`;
  } else if (finalBMI >= 24.9 && finalBMI < 29.9) {
    calculatedValue.innerText = `Over weight : ${finalBMI}`;
  } else if (finalBMI >= 30) {
    calculatedValue.innerText = `Obese : ${finalBMI}`;
  }
}
userBMI();
