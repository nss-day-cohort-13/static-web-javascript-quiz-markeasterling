// object in which height and character is kept
var treeGrowValues = {};

// function that creates a tree based on the user's criteria of height and character choice
	var treeGrow = function (object) {
	//event.preventDefault();

// puts the user's form inputs into an object
	object.rows = document.getElementById('howHigh').value;
	object.treebit = document.getElementById('character').value;

// assures the user has entered a value for both fields. alert will notify user if a field is blank
	if (object.rows=="" || isNaN(object.rows) || object.treebit=="") {
		alert("Please enter an appropriate value for both fields.")
	} else {


// loop to build tree with repeating character treeBit
	var row = 1;
	for (var i = object.rows; i > 0; i--) {
		string = ' '.repeat(i-1) + object.treebit.repeat(row*2 - 1)
		row++
		console.log(string)
	}
	}
};

// event listener. when "Grow your Tree!" is clicked, or the enter key is pressed with either
// field focused, the treegrow function will run with the user's criteria.
document.getElementById("howHigh").addEventListener("keypress", enterKeyListener);
document.getElementById("character").addEventListener("keypress", enterKeyListener);
document.getElementById("growTreeButton").addEventListener("click", treeGrow);

//only executes treeGrow function if the enter key is pressed
function enterKeyListener(key) {
	if(key.keyCode === 13)	{
		treeGrow(treeGrowValues);
	}
}
