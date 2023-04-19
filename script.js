function deActivate() {
  document.getElementById("nav-home").className = "";
  document.getElementById("nav-charge").className = "";
  document.getElementById("nav-loan").className = "";
  document.getElementById("nav-pump").className = "";
  document.getElementById("nav-inventory").className = "";
}

function displayHome() {
  deActivate();
  document.getElementById("nav-home").className = "active";
  document.getElementById("main").innerHTML = "<p>home</p>"
}

function displayCharge() {
  deActivate();
  document.getElementById("nav-charge").className = "active";
  document.getElementById("main").innerHTML = "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSf9A-SodqM7P3nhA7fZwrb3p_qm8bplbDEk5OyK10aa3lWm6A/viewform?embedded=true'>Loading…</iframe>"
  setTimeout(displayHome, 60_000);
}

