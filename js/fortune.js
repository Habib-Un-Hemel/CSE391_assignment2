// Array of fortune messages
const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",
  "A golden egg of opportunity falls into your lap this month.",
  "A hunch is creativity trying to tell you something.",
  "A journey of a thousand miles begins with a single step.",
  "A lifetime of happiness lies in store for you.",
];

// Get the fortune box element
const fortuneBox = document.getElementById("fortune-box");

// Function to display a random fortune
function displayFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneBox.textContent = fortunes[randomIndex];
}

// Function to change colors of the fortune box
function changeColors(color) {
  // Set background color
  fortuneBox.style.backgroundColor = color;

  // Set text color based on background for contrast
  if (color === "red" || color === "green") {
    fortuneBox.style.color = "white";
  } else {
    fortuneBox.style.color = "black";
  }

  // Set border color
  switch (color) {
    case "red":
      fortuneBox.style.borderColor = "darkred";
      break;
    case "lightblue":
      fortuneBox.style.borderColor = "blue";
      break;
    case "green":
      fortuneBox.style.borderColor = "darkgreen";
      break;
    case "orange":
      fortuneBox.style.borderColor = "brown";
      break;
  }

  // Change font properties
  changeFont();
}

// Function to change font properties
function changeFont() {
  const fontSizes = ["16px", "18px", "20px"];
  const fontFamilies = [
    "Arial",
    "Georgia",
    "Verdana",
    "Tahoma",
    "Comic Sans MS",
  ];

  // Select random font size and family
  const randomFontSize =
    fontSizes[Math.floor(Math.random() * fontSizes.length)];
  const randomFontFamily =
    fontFamilies[Math.floor(Math.random() * fontFamilies.length)];

  // Apply changes
  fortuneBox.style.fontSize = randomFontSize;
  fortuneBox.style.fontFamily = randomFontFamily;
}

// Display a fortune when the page loads
document.addEventListener("DOMContentLoaded", displayFortune);
