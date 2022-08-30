// Create canvas variable
var cavnas = new fabric.Canvas('myCanvas');
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image, top,left) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: top, //could have used block_x here
			left: left //could have used block_y here
		});
		cavnas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png', 0, 0);
		console.log("r");
	}
	if (keyPressed == '71') {
		block_x = 200;
		new_image('gr.png', 0, 200);
		console.log("g");
	}

	if (keyPressed == '89') {
		block_x = 350;
		new_image('yr.png', 0, 350);
		console.log("y");
	}
	if (keyPressed == '80') {
		block_x = 600;
		new_image('pr.png', 0, 600);
		console.log("p")
	}
	if (keyPressed == '66') {
		block_x = 700;
		new_image('br.png', 0, 700);
		console.log("b")
	}

}