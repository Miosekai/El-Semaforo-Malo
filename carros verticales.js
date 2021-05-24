class Carrosverticales {

constructor(x,y,speed){

    this.x = x;
    this.y = y;
    this.speed = speed;

}

pintar(){

    noStroke();
    fill(247, 71, 45);
    rect(this.x - 10, this.y - 10, 15, 25);
    rect(this.x - 10, this.y + 35, 15, 25);
    rect(this.x + 36, this.y - 10, 15, 25);
    rect(this.x + 36, this.y + 35, 15, 25);
    fill(43, 1, 37);
    rect(this.x, this.y, 40, 50);

}

mover(){

    this.y += this.speed;
		
    if(this.y > 700 + 25)
    {
        this.y = random(-60, -560);
    
    }

}

getX() {
        
    return this.x;

}

 getY() {

    return this.y;

}

 setX (x) {
    
    this.x = x;
}

setY (y) {
    
    this.y = y;
}

}