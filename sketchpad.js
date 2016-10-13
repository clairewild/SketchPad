
createGrid = function(height, width) {
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
	$(".square").css("background-color", "ghostwhite");
}

erase = function() {
	$(".square").mouseenter(function() {
		$(this).css("background-color", "ghostwhite");
	});
}

newGrid = function() {
	$(".container").empty();
	height = parseInt(prompt("What size grid? Height:"));
 	width = parseInt(prompt("Width:"));
 	createGrid(height, width);
}

$(document).ready(function() {
	createGrid(100, 100);  
	$("#reset").click(reset);
	$("#grid-size").click(newGrid);
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
