function deActivate() {
  document.getElementById("nav-charge").className = "";
  document.getElementById("nav-loan").className = "";
  document.getElementById("nav-pump").className = "";
  document.getElementById("nav-inventory").className = "";
}

function displayCharge() {
  deActivate();
  document.getElementById("nav-charge").className = "active";
  document.getElementById("main").innerHTML = "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSf9A-SodqM7P3nhA7fZwrb3p_qm8bplbDEk5OyK10aa3lWm6A/viewform?embedded=true'>Loading…</iframe>"
  setTimeout(displayCharge, 60_000);
}

function displayLoan() {
  deActivate();
  document.getElementById("nav-loan").className = "active";
  document.getElementById("main").innerHTML = "loan"
  document.getElementById("main").innerHTML = "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdUTUmKmyRXj39MytjGY5sRXlf-5HjmQp9OtVAAXBRjk_x4eA/viewform?embedded=true'>Loading…</iframe>"
  setTimeout(displayCharge, 60_000);
}

function displayPump() {
  deActivate();
  document.getElementById("nav-pump").className = "active";
  document.getElementById("main").innerHTML = "pump"
  document.getElementById("main").innerHTML = "<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfj428TP8OTeadZQuZp6j2tZzOs-GK1Ro90ATJaGTAe3gb-QQ/viewform?embedded=true'>Loading…</iframe>"
  setTimeout(displayCharge, 60_000);
}

function displayInventory() {
  deActivate();
  document.getElementById("nav-inventory").className = "active";
  document.getElementById("main").innerHTML = "inventory"
  document.getElementById("main").innerHTML = "<iframe style='position: absolute;top: 10%;left: 0;bottom: 0;right: 0;width: 100%;height: 90%;' src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTS1P3sJu_QYnADqWKS8XiQ3sQySV8mROW8PDcR-3TSOei7hj7CGQbYzNBUAJs1LTrpMfjvDViBZYUl/pubhtml?widget=true&amp;headers=false'></iframe>"
  setTimeout(displayCharge, 60_000);
}

