// update copyright footer every year
var today = new Date(),
  year = today.getFullYear(),
  copyright = document.getElementById("copyright");

copyright.innerHTML =
  "Dharma are a five member Hardcore/Metal band from Lisbon, Portugal © All rights reserved " +
  year;
