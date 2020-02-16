//Grab the numbers from the form when submitted

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  //get the numbers
  const amount = document.getElementById("amount").value;
  const interest = document.getElementById("interest").value;
  const years = document.getElementById("years").value;

  const principal = parseFloat(amount);
  const CalculateInterest = parseFloat(interest) / 100 / 12;
  const CalculatePayment = parseFloat(years) * 12;

  //monthly payment
  const x = Math.pow(1 + CalculateInterest, CalculatePayment);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);
  console.log(monthlyPayment);
  //Interest
  const totalInterest = (monthly * CalculatePayment - principal).toFixed(2);
  console.log(totalInterest);
  //Total Payment
  const totalPayment = (monthly * CalculatePayment).toFixed(2);

  //Results
  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;
  document.getElementById("totalInterest").innerHTML = "%" + totalInterest;
  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

  e.preventDefault();
}
