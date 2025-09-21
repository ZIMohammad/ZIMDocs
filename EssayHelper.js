// Get all <p> elements with the class "section-title"
var sectionTitles = document.querySelectorAll('p.section-title');

// Add an event listener to each section title element
for (var i = 0; i < sectionTitles.length; i++) {
  var titleElement = sectionTitles[i];
  
  // When the user clicks on a section title, display a message
  titleElement.addEventListener('click', function() {
    alert("You clicked on " + titleElement.textContent);
  });
}

function toggleCSS() {
  var button = document.getElementById("themeSwitch");
  var currentCSS = document.getElementById("css").href;
  if (currentCSS === "Verdant.css") {
    button.textContent = "Light Mode";
    document.getElementById("css").href = "Savanna.css";
  } else {
    button.textContent = "Dark Mode";
    document.getElementById("css").href = "Verdant.css";
  }
}
