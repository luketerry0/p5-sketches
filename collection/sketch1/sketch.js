function setup() {
	createCanvas(windowWidth, windowHeight);
	background("grey")
	img = loadImage("pics/che.png")
	img.loadPixels();
	cg = new gridOfCircles(0,0,10,10,50,50);
	

}

function draw() {
	//image(img, 0,0)
	//circle(0,0,50)
	circle(windowWidth,windowHeight, 50)
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
		this.grid =  Array.from(Array(length), () => {
			return new Array(width).fill(this.d)
		})
	}

	changeDiameters(circlesToChange, newDiameter){
		//changes the radii of certain circles in the grid, where the 2d array == true
		for (let i = 0; i < circlesToChange.length; i++){
			let x = circlesToChange[i][0];
			let y = circlesToChange[i][1];

			this.grid[x][y] = newDiameter;
			console.log(this.grid)
		}
	}

	draw(){
		//draws the grid of circles
		
		for (let i = 0; i < 10; i++){
			for (let j = 0; j < 10; j++){
				circle(this.cx + this.spc*i, this.cy + this.spc*j, this.grid[i][j])
			}
		}
	}

}

