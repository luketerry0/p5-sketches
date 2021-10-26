function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#d9d9d9")
	translate(-width/2, -height/2)
	cg = circleGrid(10, 25,7,4,[3,4,5,7,14, 30])
	img = loadImage("pics/che.png")
}

function draw() {

	cg.draw();
}

//create object constructor for circle grid
//intakes width, height, largeRadius, smallRadius, and a list of circles to draw small
//small circles list is simply sequential starting at 0,0, going to 0, n, then to 1, 0 and so on
function circleGrid(w, h, largeRadius, smallRadius, smallCircleList) {
	//grid of circles
	this.width = w;
	this.height = h;
	this.Br = largeRadius;
	this.Sr = smallRadius;
	this.smallCircles = smallCircleList
	this.spacing = (windowWidth/2 - this.Br) / w

	this.draw = function(){
		//aesthetic settings
		fill("#291007")
		stroke("#291007")


		//draw the grid of circles
		for (j = 0; j < this.height; j++){
			for (i = 0; i < this.width; i++){

				if (this.smallCircles.indexOf((j*this.width + i)) == -1){
					//if the circle is meant to be big
					circle(i*this.spacing + Br, j*this.spacing + Br, this.Br);
				} else{
					//if the circle is meant to be small
					circle(i*this.spacing + Br, j*this.spacing + Br, this.Sr);
				}

			}
		}
	}
}
