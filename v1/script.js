/*
 This calculates how many MTAs are remaining to be built and tested and the same equation will be used to calculate the amount of tips needed to be packed
  */

// Calculate the difference between total and working value
function workingValue(total, currentValue) {
  // return the difference between total and currentValue
  return total - currentValue
}

// Remaining MTAs to build
let MTA_Total = document.getElementById("MTA_Total").innerHTML;
let MTA_Built = document.getElementById("MTA_Amount_Built").innerHTML;
let MTA_Remaining = workingValue(MTA_Total, MTA_Built);
document.getElementById("MTA_Amount_Remaining").innerHTML = MTA_Remaining;

// Remaining MTAs to test
let MTA_Tested = document.getElementById("MTA_Amount_Tested").innerHTML;
let MTA_Remaining_Tested = workingValue(MTA_Total, MTA_Tested);
document.getElementById("MTA_Amount_Remaining_Test").innerHTML = MTA_Remaining_Tested;

// Remaining Tips to Pack

//2507
let Tip_2507_Total = document.getElementById("Tip_2507_Amount").innerHTML;
let Tip_2507_Packed = document.getElementById("Tip_2507_Packed").innerHTML;
let Tip_2507_Remaining = workingValue(Tip_2507_Total, Tip_2507_Packed);
document.getElementById("Tip_2507_Remaining").innerHTML = Tip_2507_Remaining;

//2500
let Tip_2500_Total = document.getElementById("Tip 2500_Amount").innerHTML;
let Tip_2500_Packed = document.getElementById("Tip_2500_Packed").innerHTML;
let Tip_2500_Remaining = workingValue(Tip_2500_Total, Tip_2500_Packed);
document.getElementById("Tip_2500_Remaining").innerHTML = Tip_2500_Remaining;

//1910
let Tip_1910_Total = document.getElementById("Tip_1910_Amount").innerHTML;
let Tip_1910_Packed = document.getElementById("Tip_1910_Packed").innerHTML;
let Tip_1910_Remaining = workingValue(Tip_1910_Total, Tip_1910_Packed);
document.getElementById("Tip_1910_Remaining").innerHTML = Tip_1910_Remaining;

//1905
let Tip_1905_Total = document.getElementById("Tip_1905_Amount").innerHTML;
let Tip_1905_Packed = document.getElementById("Tip_1905_Packed").innerHTML;
let Tip_1905_Remaining = workingValue(Tip_1905_Total, Tip_1905_Packed);
document.getElementById("Tip_1905_Remaining").innerHTML = Tip_1905_Remaining;

//1900
let Tip_1900_Total = document.getElementById("Tip_1900_Amount").innerHTML;
let Tip_1900_Packed = document.getElementById("Tip_1900_Packed").innerHTML;
let Tip_1900_Remaining = workingValue(Tip_1900_Total, Tip_1900_Packed);
document.getElementById("Tip_1900_Remaining").innerHTML = Tip_1900_Remaining;

if((MTA_Remaining == 0) && (MTA_Remaining_Tested == 0)) {
  document.getElementById("MTA_Status").innerHTML = MTA_Total + " " + "MTAs Built and Tested";
} 

