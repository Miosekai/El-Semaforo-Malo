let carrop;
let carX;
let carY;
let carPosA;
let carPosB;
let carPosC;
let carPosD;
let carPosE;
let lost;
let resetX;
let resetY;
let listacarrosverticales= []; // lista de los carros verticales
let carropasando;
let carrosverticales; 
let win;


function setup() {
  createCanvas(700, 700);

 //let botCars 
  //botCarsList = new ArrayList<botCars>();

  lost = false;
  win = false;
		
  carropasando = new CarroPasando();
  
  carX = 75;
  carY = 375;
  
  carropasando.setX(carX);
  carropasando.setY(carY);

  carPosA = 150;
		carPosB = 225;
		carPosC = 300;
		carPosD = 375;
		carPosE = 450;

    resetX = 310;
		resetY = 420;


}

function draw() {
  
 // Fondo 
background(30,33,61);

// Calle
  noStroke();
  fill(233, 221, 219);
  rect(135, 0, 371, 700);
  rect(0, 344, 400, 100);
  rect(200, 344, 400, 100);

  carropasando.pintar();
  carropasando.catcher();
  if(carropasando.getX() > 500 && !win) {
	  console.log("Ganaste");
	  setTimeout(function() {
		win = true;
	  },80);
  }

  if(listacarrosverticales.length < 5)
  {
    listacarrosverticales.push(new Carrosverticales(carPosA, random(-300, -50), random(3, 10)));
    listacarrosverticales.push(new Carrosverticales(carPosB, random(-300, -50), random(3, 10)));
    listacarrosverticales.push(new Carrosverticales(carPosC, random(-300, -50), random(3, 10)));
    listacarrosverticales.push(new Carrosverticales(carPosD, random(-300, -50), random(3, 10)));
    listacarrosverticales.push(new Carrosverticales(carPosE, random(-300, -50), random(3, 10)));
  }
 
	for( i = 0; i < listacarrosverticales.length; i++)
	
  {
			let actual = listacarrosverticales[i];
			actual.pintar();
			actual.mover();
			
			if(dist(carropasando.getX(), carropasando.getY(), actual.getX(), actual.getY() + 20) < 10)
			{
				lost= true;
			}
		
    if(lost)
		{
			fill(255);
			rect(0, 0, 700, 700);
			fill(0);
			textSize(50);
			text("Perdiste ;(", 250, 290);
			
			stroke(0);
			strokeWeight(3);
			fill(255);
			rect(resetX, resetY, 80, 30);
			
			fill(0);
			strokeWeight(1);
			textSize(20);
			text("volver", resetX + 12, resetY + 20);

    
			}


    if(win){

		fill(255);
		rect(0, 0, 700, 700);
		fill(0);
		textSize(50);
		text("Ganaste ;)", 250, 290);
		
		stroke(0);
		strokeWeight(3);
		fill(255);
		rect(resetX, resetY, 80, 30);
		
		fill(0);
		strokeWeight(1);
		textSize(20);
		text("volver", resetX + 12, resetY + 20);

}					
  
  }

}

function mousePressed(){
	console.log	(carropasando.getX());

if (lost){

	if(dist(mouseX, mouseY, resetX + 45, resetY + 20) < 25)
	{
		lost = false;
		
		carropasando.setX(75);
	}


}


if (win){

	if(dist(mouseX, mouseY, resetX + 45, resetY + 20) < 25)
	{
		win = false;
		carropasando.setX(75);
	}

}

}


	function keyReleased() {
		if(key == 'd' || key == 'D')
		{
			carropasando.setX(carropasando.getX() + 75);
		}
	
		else if(key == 'a' || key == 'A')
		{
			carropasando.setX(carropasando.getX() - 75);
		
			if(carX < 150)
			{
				carX = 75;
			}
		}


		function lost()
		{
			fill(255);
			textAlign(CENTER);
			rect(0, 0, 700, 700);
			fill(0);
			textSize(80);
			text("Perdiste ;(", 350, 350);
			lost = true;			
			carX = 75;
		}
	
	
	    function win(){

		fill(255);
		textAlign(CENTER);
		rect(0, 0, 700, 700);
		fill(0);
		textSize(80);
		text("Ganaste ;)", 350, 350);
		win = true;
		carX = 75;
	}
	
	
	
	
	
	
	}



  






