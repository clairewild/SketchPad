
function createGrid(height, width) {
	for (i = 0; i < height; i++) {
		$(".container").append("<div class='row'></div>");
	}
	for (j = 0; j < width; j++) {
		$(".row").append("<div class='square'></div>");
	}
}

draw = function() {
	$(".square").mouseenter(function() {
		$(this).addClass("ink");
	});
}

reset = function() {
	$(".square").removeClass("ink");
}

erase = function() {
	$(".square").mouseenter(function() {
		$(this).removeClass("ink");
	});
}

$(document).ready(function() {
	createGrid(100, 100);
	$(".square").click(draw);
	$("#reset").click(reset);
	$("#eraser").click(erase);
	$("#grid-size").click(function() {
		$(".container").empty();
		height = parseInt(prompt("What size grid? Height:"));
 		width = parseInt(prompt("Width:"));
 		createGrid(height, width);
 		$(".square").click(draw);
	});
});
