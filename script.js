function compute() {

  var principal = document.getElementById("principal").value;
  var x = document.getElementById("principal").value;

  if (x <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    document.getElementById("principal").value = null;
    return false;
  } else {
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("text1").innerText = "If you deposit ";
    document.getElementById("principal_res").style.backgroundColor = "yellow";
    document.getElementById("principal_res").innerText = principal + ","
    document.getElementById("text2").innerText = "at an interest rate of ";
    document.getElementById("rate_res").style.backgroundColor = "yellow";
    document.getElementById("rate_res").innerText = rate + ",";
    document.getElementById("text3").innerText = "You will receive an amount of ";
    document.getElementById("interest_res").style.backgroundColor = "yellow";
    document.getElementById("interest_res").innerText = interest + ",";
    document.getElementById("text4").innerText = "in the year ";
    document.getElementById("years_res").style.backgroundColor = "yellow";
    document.getElementById("years_res").innerText = year;
  }
}

function updateRate() {
  var newrate = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = newrate + "%";
}
