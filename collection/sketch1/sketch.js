//Aesthetics
backgroundCol = "White"
circleCol = "Black"



function preload(){
	img = loadImage("pics/che.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(backgroundCol)


	rsx = 60; // resolution

	//set the sizing for the circle array
	img.resize(windowWidth/2, 0)
	let iw = img.width;
	let ih = img.height;

	rsy = rsx*(ih/iw)

	let cw = ceil(rsx);
	let ch = ceil(rsy);
	let di = ceil(iw/rsx);

	//create the circle array
	cg = new gridOfCircles(windowWidth/4 + di/2,0,cw,ch,di,di);
	


	//calculate which circles should be shrunk
	var toBeShrunk = new Array;

	//load image pixels
	img.loadPixels();

	//iterate over the circles
	for (let i = 0; i < cw; i++){
		for (let j = 0; j < ch; j++){
			let x = Math.ceil(map(i, 0, cw, 0, iw));
			let y = Math.ceil(map(j, 0, ch, 0, ih));

			//get the pixel I'm interested in
			pixel = img.get(x,y)
			console.log(pixel);

			if (((pixel[0] + pixel[1] + pixel[2]) <= (200)) && (pixel[3] != 0)){
				toBeShrunk.push([i,j])
			}
		}
	}

	//shrink the appropriate pixels
	cg.changeDiameters(toBeShrunk, di*(17/20))

}

function draw() {
	//image(img, 0,0)
	//circle(0,0,50)
	circle(windowWidth,windowHeight, 50)

	img.resize(windowWidth/2, 0)
	//image(img, windowWidth/4, 0)

	cg.draw();
}


class gridOfCircles{
	//creates a class for a gridOfCircles object to draw a grid of circles, where each circle's size can be changed through a 2d array
	constructor(cornerx,cornery,width,length,standardDiameter, spacing){
		this.cx = cornerx;
		this.cy = cornery;
		this.width = width;
		this.length = length;
		this.d = standardDiameter;
		this.spc = spacing;
		//construct a 2dArray to store the diameters of the circles
		this.grid =  Array.from(Array(width), () => {
			return new Array(length).fill(this.d)
		})
	}

	changeDiameters(circlesToChange, newDiameter){
		//changes the radii of certain circles in the grid, where the 2d array == true
		for (let i = 0; i < circlesToChange.length; i++){
			let x = circlesToChange[i][0];
			let y = circlesToChange[i][1];

			this.grid[x][y] = newDiameter;
		}
	}

	draw(){
		//draws the grid of circles
		for (let i = 0; i < this.width; i++){
			for (let j = 0; j < this.length; j++){
				//aesthetics
				stroke(backgroundCol)
				fill(circleCol)
				//actually draw the circle
				circle(this.cx + this.spc*i, this.cy + this.spc*j, this.grid[i][j])
			}
		}
	}

}

