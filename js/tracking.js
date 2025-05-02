// Initialize click count from localStorage or start at 0
let viewClickCount = parseInt(localStorage.getItem('viewClickCount')) || 0;

// Function to update the count visually
function updateClickCountDisplay() {
  const display = document.getElementById("clickCountDisplay");
  if (display) {
    display.innerText = viewClickCount;
  }
}

// Function to show CV and increment count
function showCV() {
  viewClickCount++;
  localStorage.setItem("viewClickCount", viewClickCount);
  updateClickCountDisplay();

  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    window.open('CURRICULUM_VITAE_MD_EYASIN_ALI_SARKER.pdf', '_blank');
  } else {
    document.getElementById('cvFrame').src = "CURRICULUM_VITAE_MD_EYASIN_ALI_SARKER.pdf";
    document.getElementById('cvContainer').style.display = "block";
    document.getElementById('downloadBtn').style.display = "inline-block";
  }
}

// Function to close the CV view
function closeCV() {
  document.getElementById('cvFrame').src = "";
  document.getElementById('cvContainer').style.display = "none";
  document.getElementById('downloadBtn').style.display = "none";
}

// Call this on page load to set the initial count
document.addEventListener("DOMContentLoaded", updateClickCountDisplay);
