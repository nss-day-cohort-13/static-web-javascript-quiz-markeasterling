var rows;
var treeBit;
var treeGrowValues = {};


// function that creates a tree based on the user's criteria of height and character choice
	var treeGrow = function (rows , treeBit) {
	event.preventDefault();

// puts the user's form inputs into an object
	treeGrowValues.rows = document.getElementById('howHigh').value;
	treeGrowValues.treebit = document.getElementById('character').value;

//defines variables used in the tree builder by retreiving strings from the object
	rows = treeGrowValues.rows;
	treeBit = treeGrowValues.treebit;

// assures the user has entered a value for both fields. alert will notify user if a field is blank
	if (rows=="" || isNaN(rows) || treeBit=="") {
		alert("Please enter an appropriate value for both fields.")
	} else {


// loop to build tree with repeating character treeBit
	var row = 1;
	for (var i = rows; i > 0; i--) {
		string = ' '.repeat(i-1) + treeBit.repeat(row*2 - 1)
		row++
		console.log(string)
	}
	}
}

// event listener. when "Grow your Tree!" is clicked, or the enter key is pressed with either
// field focused, the treegrow function will run with the user's criteria.
document.getElementById("grow").addEventListener("submit", treeGrow);

