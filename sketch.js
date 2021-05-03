var circ1=5;
	seethru=255;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,circ1,circ1); // center of canvas, 20px dia
  fill(230,140,255,seethru);
  rect(250,100,250,100);
  
  
}

	function mousePressed(){
		if (circ1>200){
			circ1=5;
		}else{
			circ1=circ1+10;
		}

		if (seethru<0)
			{seethru=255;
			}else{
			seethru=seethru-5;}
		
	}

