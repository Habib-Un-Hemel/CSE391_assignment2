const fortunes = [
  "A golden egg of opportunity falls into your lap this month.",
  "A hunch is creativity trying to tell you something.",
  "A journey of a thousand miles begins with a single step.",
  "A lifetime of happiness lies in store for you.",
  "Indeed, with hardship comes ease. (Quran 94:6)",
  "Patience is beautiful. (Quran 12:18)",
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",

  "Allah does not burden a soul beyond that it can bear. (Quran 2:286)",
  "Verily, with every difficulty there is relief. (Quran 94:5)",
  "And He found you lost and guided you. (Quran 93:7)",
  "Put your trust in Allah; Allah loves those who put their trust in Him. (Quran 3:159)",
  "The cure for ignorance is to question. (Islamic proverb)",
  "The strongest among you is the one who controls his anger. (Hadith)",
  "He who has health has hope, and he who has hope has everything. (Islamic proverb)",
  "The world is three days: yesterday has gone with all that was done; tomorrow, you may never reach; but today is for you so do good in it. (Hasan al-Basri)",
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
    "Courier New", // Monospace
    "Tahoma", //
    "Impact", // Bold/narrow
    "Georgia", // Decorative
    "Times New Roman", // Serif
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
