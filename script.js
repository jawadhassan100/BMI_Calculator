const Weight = document.getElementById("weight");
const Height = document.getElementById("height");
const Button = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const calculatedValue = document.getElementById("calculatedBmi");

const heightFeet = document.getElementById("heightinfeet");
const heightInch = document.getElementById("heightinInch");
const calculateCmBtn = document.getElementById("calculateCm");
const calculatedHeight = document.getElementById("calculatedHeight");

// Tabs
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    cards.forEach(c => c.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.remove("hidden");
  });
});

// Reset BMI
resetButton.addEventListener("click", () => {
  Weight.value = "";
  Height.value = "";
  calculatedValue.innerText = "";
  heightFeet.value = "";
  heightInch.value = "";
  calculatedHeight.innerText = "";
});

// BMI Calc
Button.addEventListener("click", (e) => {
  e.preventDefault();
  const userWeight = parseFloat(Weight.value);
  const userHeight = parseFloat(Height.value);
  if (!userWeight || !userHeight) {
    alert("Input fields cannot be empty!");
    return;
  }
  const BMI = (userWeight / (userHeight * userHeight)) * 10000;
  const finalBMI = BMI.toFixed(1);

  if (finalBMI < 18.5) {
    calculatedValue.innerText = `Underweight: ${finalBMI}`;
  } else if (finalBMI < 24.9) {
    calculatedValue.innerText = `Normal: ${finalBMI}`;
  } else if (finalBMI < 29.9) {
    calculatedValue.innerText = `Overweight: ${finalBMI}`;
  } else {
    calculatedValue.innerText = `Obese: ${finalBMI}`;
  }
});



// Feet to Cm Calc
calculateCmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const feet = parseFloat(heightFeet.value) || 0;
  const inch = parseFloat(heightInch.value) || 0;
  if (!feet && !inch) {
    alert("Please enter height in feet and/or inches");
    return;
  }
  const cm = (feet * 30.48) + (inch * 2.54);
  calculatedHeight.innerText = `${Math.round(cm)} cm`;  // 👈 no decimals
});

// Copy Results
document.getElementById("copyBmi").addEventListener("click", () => {
  if (calculatedValue.innerText) {
    navigator.clipboard.writeText(calculatedValue.innerText);
    alert("BMI copied!");
  }
});

document.getElementById("copyHeight").addEventListener("click", () => {
  if (calculatedHeight.innerText) {
    navigator.clipboard.writeText(calculatedHeight.innerText);
    alert("Height copied!");
  }
});
