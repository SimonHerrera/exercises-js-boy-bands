var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash" , "Corn"];

// The number of loops to perform (what if the array changes?)

// Here is sayinh, bands.lenght > Veggie.length - yes = bands.length no = veggies.length
// another example - var voteable = (age < 18) ? "Too young":"Old enough";

var loopCount = bands.length > vegetables.length ? bands.length : vegetables.length

/*
if (bands.length >= vegetables.length) {
	loopCount = bands.length;
} else {
	loopCount = vegetables.length;
}
*/

//var loopCount = bands.length;
//var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
// var newBandElement= bandElement.innerHTML; - Could you do it another way and not use <p> below?

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

	if (bands[loopTracker] != undefined) {
		currentBand += "<p>" + bands[loopTracker] + "</p>" ;
	}

	//OR

	//OR
	if (vegetables[loopTracker] != undefined) {
  		currentVeggie += "<p>" + vegetables[loopTracker] + "</p>" ;
  	}
}

//Add the band names into the correct <div>
  	bandElement.innerHTML = '<h2>Boy Bands</h2>' + currentBand ;

//Add the band names into the correct <div>
  	veggieElement.innerHTML = '<h2>Vegetables</h2>' + currentVeggie;