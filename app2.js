//Function to calculate Mortgage
document
  .getElementById("mortgage-form")
  .addEventListener("submit", computeResults);
//Formula from Wiki: c = ((p * r) * Math.pow((1+r), n), n)-1)
/**
 *
 * @param {*} p  float amount borrowed
 * @param {*} r  decimal interest percentage
 * @param {*} n
 * @param {*} e  to prevent default
 */
function calculateMortgage(p, r, n) {
  //convert pecentage to decimal
  r = percentToDecimal(r);

  //convert years to months
  n = yearsToMonths(n);

  var pmt = (r * p) / (1 - Math.pow(1 + r, -n));
  pmt2 = pmt.toFixed(2);
  //Post payments
  document.getElementById("outMonthly").innerHTML = "$" + pmt2;
}

function percentToDecimal(percent) {
  return percent / 12 / 100;
}

function yearsToMonths(years) {
  return years * 12;
}

//Grab the numbers from the form when submitted

function computeResults(e) {
  var cost = document.getElementById("inAmount").value;

  var downPayment = document.getElementById("inDown").value;
  var interest = document.getElementById("inAPR").value;
  var term = document.getElementById("inPeriod").value;

  if (cost <= 0) {
    alert("Invalid cost");
  }

  var amountBorrow = cost - downPayment;
  var pmt = calculateMortgage(amountBorrow, interest, term);

  e.preventDefault();
}
