document.getElementById("form").addEventListener("submit", computeTip);
document.getElementById("ic1").style.visibility = "hidden";
document.getElementById("ic2").style.display = "none";
document.getElementById("ic3").style.display = "none";
document.getElementById("ic4").style.display = "none";
//document.getElementById("customTip").style.display = "none";
function computeTip(e) {
  const billAmount = document.getElementById("TipAmount").value;
  var numOfPeople = document.getElementById("NumPeople").value;
  var service = document.getElementById("service").value;
  var serviceTip = document.querySelector('input[name="tipVal"]:checked').value;
  //var customTip = document.getElementById("customTip").value;

  if (billAmount == "" || billAmount === undefined || billAmount <= 0) {
    alert("Please provide your total bill");
  }

  if (numOfPeople == "" || numOfPeople === undefined) {
    numOfPeople = 1;
  }

  if (serviceTip == 12) {
    var twelvePercentOfBill = billAmount * 0.12;
    var tipTotal = twelvePercentOfBill * 1;
    var perPerson = tipTotal / numOfPeople;
    var tipPerPerson = perPerson.toFixed(2);
    document.getElementById("customTip").style.display = "none";
  } else if (serviceTip == 15) {
    var fifteenPercentOfBill = billAmount * 0.15;
    var tipTotal = fifteenPercentOfBill * 1;
    var perPerson = tipTotal / numOfPeople;
    var tipPerPerson = perPerson.toFixed(2);
    document.getElementById("customTip").style.display = "none";
  } else if (serviceTip == 18) {
    var eighteenPercentOfBill = billAmount * 0.18;
    var tipTotal = eighteenPercentOfBill * 1;
    var perPerson = tipTotal / numOfPeople;
    var tipPerPerson = perPerson.toFixed(2);
    document.getElementById("customTip").style.display = "none";
  } else if (serviceTip == 20) {
    var twentyPercentOfBill = billAmount * 0.2;
    var tipTotal = twentyPercentOfBill * 1;
    var perPerson = tipTotal / numOfPeople;
    var tipPerPerson = perPerson.toFixed(2);
    document.getElementById("customTip").style.display = "none";
  } else if (serviceTip == "none") {
    var tipPerPerson = 0;
    var tipTotal = 0;
  } else if (serviceTip == "custom") {
    // document.getElementById("customTip").style.display = "block";
    var customTip = document.getElementById("customTip").value;
    if (
      customTip == "" ||
      customTip == undefined ||
      customTip == 0 ||
      customTip < 0
    ) {
      alert("Please provide a tip of more than 1 percent.");
    }
    var customDeci = customTip / 100;
    var customPerc = billAmount * customDeci;

    var tipTotal = customPerc / 2 + customPerc;
    var perPerson = tipTotal / numOfPeople;
    var tipPerPerson = perPerson.toFixed(2);
  }

  var billvar = parseInt(billAmount);
  var totalAmount = billvar + tipTotal;

  if (service == "Excellent") {
    document.getElementById("outFeedback").innerHTML = "Excellent!";
    document.getElementById("ic1").style.visibility = "visible";
  }

  if (service == "Good") {
    document.getElementById("outFeedback").innerHTML = "Good!";
    document.getElementById("ic1").style.visibility = "visible";
  }

  if (service == "Average") {
    document.getElementById("outFeedback").innerHTML = "Average..";
    document.getElementById("ic1").style.visibility = "visible";
  }

  if (service == "Bad") {
    document.getElementById("outFeedback").innerHTML = "Bad..";
    document.getElementById("ic1").style.visibility = "visible";
  }

  //Tip Results
  document.getElementById("outTip").innerHTML = "$" + tipPerPerson;
  document.getElementById("outTotal").innerHTML = "$" + totalAmount;

  e.preventDefault();
}
