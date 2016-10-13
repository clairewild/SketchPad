
createGrid = function(height, width) {
	$(".container").empty();
	for (i = 0; i < height; i++) {
		$(".container").append("<div class='row'></div>");
	}
	for (j = 0; j < width; j++) {
		$(".row").append("<div class='square'></div>");
	}
}

draw = function(color) {
	$(".square").mouseenter(function() {
		$(this).css("background-color", color);
	});
}

reset = function() {
	$(".row").css("height", "5px");
	$(".square").css("height", "5px");
	$(".square").css("width", "5px");
	$(".square").css("background-color", "ghostwhite");
	createGrid(100, 100); 
}

erase = function() {
	$(".square").mouseenter(function() {
		$(this).css("background-color", "ghostwhite");
	});
}

changeRes = function() {
	res = parseInt(prompt("Enter size of each square in px:"));
	r = res.toString() + "px";
	createGrid(500/res, 500/res);
	$(".row").css("height", r);
	$(".square").css("height", r);
	$(".square").css("width", r);
}

$(document).ready(function() {
	createGrid(100, 100);  
	$("#reset").click(reset);
	$("#resolution").click(changeRes);
	$("#eraser").click(erase);
	
	$("#black").click(function() {
		draw("black");
	});
	$("#red").click(function() {
		draw("red");
	});
	$("#blue").click(function() {
		draw("blue");
	});
	$("#green").click(function() {
		draw("green");
	});
});
